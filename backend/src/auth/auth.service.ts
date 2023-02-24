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

  async signToken(account: { email: string; id: string }) {
    const secret = this.config.get('JWT_secret');

    const payload = {
      email: account.email,
      sub: account.id,
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
    dto.isSupplier
    try {
      const hashedPassword = await argon2.hash(dto.password);

      const account = await this.prisma.account.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          role: dto.isSupplier ? 'SUPPLIER' : 'BUYER',
        },
      });
      return this.signToken(account);
    } catch (error) {
      if (error.code === 'P2002' && error.meta.target.includes('email')) {
        throw new ForbiddenException('Looks like you already have an account.');
      }
      throw new Error('Something went wrong');
    }
  }

  async login(dto: loginDto) {
    const account = await this.prisma.account.findUnique({
      where: {
        email: dto.email,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });
    if (!account) {
      throw new ForbiddenException('User not found');
    }
    const passwordValid = await argon2.verify(account.password, dto.password);

    if (!passwordValid) {
      throw new ForbiddenException('Wrong password');
    }
    delete account.password;
    return this.signToken(account);
  }
}
