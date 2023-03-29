import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  signupDto,
  loginDto,
  resetMailDto,
  resetTokenDto,
  resetPasswordDto,
} from './dto/auth.dto';
import * as argon2 from 'argon2';
import { PrismaService } from '../db-module/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
import { MailService } from './../mail/mail.service';

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
    private mailService: MailService,
  ) {}

  async signToken(account: { email: string; id: string; role: string }) {
    const secret = this.config.get('JWT_secret');

    const payload = {
      email: account.email,
      sub: account.id,
      role: account.role,
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
      await this.prisma.account.create({
        data: {
          email: dto.email.toLowerCase(),
          password: hashedPassword,
          salt: salt,
          role: dto.isSupplier ? 'SUPPLIER' : 'BUYER',
        },
      });
      return { message: 'Account created successfully' };
    } catch (error) {
      if (error.code === 'P2002' && error.meta.target.includes('email')) {
        throw new ForbiddenException('Looks like you already have an account.');
      }
      throw new Error('Wrong credentials');
    }
  }

  async login(dto: loginDto) {
    const account = await this.prisma.account.findUnique({
      where: {
        email: dto.email.toLowerCase(),
      },
      select: {
        id: true,
        email: true,
        password: true,
        salt: true,
        role: true,
      },
    });
    if (!account) {
      throw new ForbiddenException('User not found');
    }

    const passwordValid = await this.verifyPasswordWithHash(
      dto.password,
      account.password,
      account.salt,
    );

    if (!passwordValid) {
      throw new ForbiddenException('Wrong credentials');
    }
    delete account.password;
    return this.signToken(account);
  }

  async sendResetCode(dto: resetMailDto) {
    try {
      const email = dto.email.toLowerCase();

      const account = await this.prisma.account.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          role: true,
        },
      });
      if (!account) {
        throw new ForbiddenException('User not found');
      }

      const token = 
        Math.floor(Math.random() * 1000000)
          .toString()
          .padStart(6, '0')
      

      const existingResetPassword = await this.prisma.resetPassword.findUnique({
        where: { email },
      });
      if (existingResetPassword) {
        await this.prisma.resetPassword.update({
          where: { email },
          data: { token },
        });
      } else {
        await this.prisma.resetPassword.create({
          data: { email, token },
        });
      }
      await this.mailService.sendResetCode(account.email, token);

      return { message: 'Reset code sent successfully' };
    } catch (error) {
      console.log(error);
      return { message: 'Something went wrong' };
    }
  }

  async verifyResetCode(dto: resetTokenDto) {
    try {
      const email = dto.email.toLowerCase();
      const token = dto.token;
     
      
      

      const account = await this.prisma.account.findUnique({
        where: { email },
      });
      if (!account) {
        throw new ForbiddenException('User not found');
      }

      const resetPassword = await this.prisma.resetPassword.findUnique({
        where: { email },
      });
      if (!resetPassword) {
        throw new ForbiddenException('Reset code not found');
      }

      if (resetPassword.token !== token) {
        throw new ForbiddenException('Wrong reset code');
      }

      return { message: 'Reset code verified successfully', data: { token  } };
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong');
    }
  }

  async resetPassword(dto: resetPasswordDto) {
    try {
      const email = dto.email.toLowerCase();
      const account = await this.prisma.account.findUnique({
        where: { email },
      });
      if (!account) {
        throw new ForbiddenException('User not found');
      }

      const resetPassword = await this.prisma.resetPassword.findUnique({
        where: { email },
      });
      if (!resetPassword) {
        throw new ForbiddenException('Reset code not found');
      }

      if (resetPassword.token !== dto.token) {
        throw new ForbiddenException('Wrong reset code');
      }
      const salt = randomBytes(128);
      const hashedPassword = await this.hashPassword(dto.password);
      

      await this.prisma.account.update({
        where: { email },
        data: { password: hashedPassword, salt: salt },
      });

      await this.prisma.resetPassword.delete({
        where: { email },
      });

      return { message: 'Password changed successfully' };
    } catch (error) {
      console.log(error);
      throw new Error('Something went wrong');
    }
  }
}
