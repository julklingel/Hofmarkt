import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  signupDto,
  loginDto,
  resetMailDto,
  resetCodeDto,
} from './dto/auth.dto';
import * as argon2 from 'argon2';
import { PrismaService } from '../db-module/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
import * as nodemailer from 'nodemailer';

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
    const account = await this.prisma.account.findUnique({
      where: {
        email: dto.email.toLowerCase(),
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
    if (!account) {
      throw new ForbiddenException('User not found');
    }
  
    const resetCode = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, '0');
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.config.get('EMAIL_USER'),
        pass: this.config.get('EMAIL_PASSWORD'),
      },
    });
  
    await transporter.sendMail({
      from: 'noreply@example.com',
      to: account.email,
      subject: 'Hofmarkt // Password Reset',
      text: `This is your reset code: ${resetCode}`,
    });
  
    // Return the reset code to the client
    return { message: 'Email successfully fired!' };
  }
  

  async verifyResetCode(dto: resetCodeDto) {
    // Retrieve the reset code and verify it.
  }

  async patchPassword(dto: any) {
    // Patch the password
  }
}
