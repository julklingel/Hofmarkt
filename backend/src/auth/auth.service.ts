import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { signupDto, loginDto } from './dto/auth.dto';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/db-module/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';

const hashingConfig = {
  parallelism: 1,
  memoryCost: 64000,
  timeCost: 3,
};

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

  async hashPassword(password: string) {
    const salt = randomBytes(16);
    return await argon2.hash(password, {
      ...hashingConfig,
      salt,
    });
  }

  async verifyPasswordWithHash(password: string, hash: string, salt: Buffer) {
    return await argon2.verify(hash, password, {
      ...hashingConfig,
      salt: salt,
    });
  }

  async signup(dto: signupDto) {
    try {
      const salt = randomBytes(128);
      const hashedPassword = await this.hashPassword(dto.password);
      const account = await this.prisma.account.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          salt: salt,
          role: dto.isSupplier ? 'SUPPLIER' : 'BUYER',
        },
      });
      return this.signToken(account);
    } catch (error) {
      if (error.code === 'P2002' && error.meta.target.includes('email')) {
        throw new ForbiddenException('Wrong credentials');
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
        salt: true,
      },
    });
    if (!account) {
      throw new ForbiddenException('Wrong credentials');
    }

    const passwordValid = await this.verifyPasswordWithHash(
      dto.password,
      account.password,
      account.salt,
    );

    if (!passwordValid) {
      throw new ForbiddenException('Wrong credentials');
    delete account.password;
    return this.signToken(account);
  }
}
