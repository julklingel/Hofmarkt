import { INestApplication } from '@nestjs/common';
import * as pactum from 'pactum';
import { PrismaService } from 'src/db-module/prisma.service';
import { offerDto } from '../src/offer/dto';

export const offerTests = (app: INestApplication, prisma: PrismaService) => {
  describe('Offer', () => {
    const offerdto: offerDto = {
      title: 'jackfruit',
      category: 'fruit',
      price: '10',
      unit: 'kg',
      amount: '10',
    };
    describe('create an offer', () => {
      it('should throw if account is not a supplier', () => {
        return pactum
          .spec()
          .post('/offer/create')
          .withHeaders({
            Authorization: 'Bearer $S{userToken}',
          })
          .withBody({
            ...offerdto,
          })
          .expectJson({
            error: 'Forbidden',
            message: 'Forbidden resource',
            statusCode: 403,
          });
      });
      it('should create a new offer', () => {
        return pactum
          .spec()
          .post('/offer/create')
          .withHeaders({
            Authorization: 'Bearer $S{supplierToken}',
          })
          .withBody({
            ...offerdto,
          })
          .expectStatus(201);
      });
    });
  });
};
