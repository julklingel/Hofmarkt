import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as moment from 'moment';
import { PrismaService } from '../db-module/prisma.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_2_HOURS)
  async deleteExpiredResetTokens() {
    const expiredTokens = await this.prisma.resetPassword.findMany({
      where: {
        createdAt: {
          lte: moment().subtract(2, 'hours').toISOString(),
        },
      },
    });

    if (expiredTokens.length) {
      const tokenIds = expiredTokens.map((token) => token.id);
      await this.prisma.resetPassword.deleteMany({
        where: {
          id: {
            in: tokenIds,
          },
        },
      });
    }
  }
}
