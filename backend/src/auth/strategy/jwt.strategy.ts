import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../db-module/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_secret'),
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const account = await this.prisma.account.findUnique({
      where: {
        id: payload.sub,
      },
    });
    if (!account) {
      throw new Error('User not found');
    }
    delete account.password;
    return account;
  }
}
