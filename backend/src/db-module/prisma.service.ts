import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  cleanDb() {
    return this.$transaction([
      this.emailVerification.deleteMany(),
      this.resetPassword.deleteMany(),
      this.watchlist.deleteMany(),
      this.cart.deleteMany(),
      this.order.deleteMany(),
      this.category.deleteMany(),
      this.offer.deleteMany(),
      this.review.deleteMany(),
      this.accountAddress.deleteMany(),
      this.image.deleteMany(),
      this.supplier.deleteMany(),
      this.user.deleteMany(),
      this.account.deleteMany(),
    ]);
  }
}
