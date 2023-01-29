import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { signupDto, loginDto } from './dto/auth.dto';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/db-module/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async signToken(user: { email: string; id: string }) {
    const secret = this.config.get('JWT_secret');

    const payload = {
      email: user.email,
      sub: user.id,
    };

    const token = this.jwt.sign(payload, {
      expiresIn: '30m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }

  async signup(dto: signupDto) {
    try {
      const hashedPassword = await argon2.hash(dto.password);

      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hashedPassword,
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
      });
      return this.signToken(user);
    } catch (error) {
      if (error.code === 'P2002' && error.meta.target.includes('email')) {
        throw new ForbiddenException('Looks like you already have an account.');
      }
      throw new Error('Something went wrong');
    }
  }

  async login(dto: loginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
      select: {
        id: true,
        email: true,
        hash: true,
      },
    });
    if (!user) {
      throw new ForbiddenException('User not found');
    }
    const passwordValid = await argon2.verify(user.hash, dto.password);

    if (!passwordValid) {
      throw new ForbiddenException('Wrong password');
    }
    delete user.hash;
    return this.signToken(user);
  }
}
