import { INestApplication } from '@nestjs/common';
import * as pactum from 'pactum';
import { PrismaService } from '../src/db-module/prisma.service';
import { userDto } from '../src/user/dto';
import { addressDto } from '../src/address';

export const userTests = (app: INestApplication, prisma: PrismaService) => {
  describe('User', () => {
    describe('create user', () => {
      const userdto: userDto = {
        firstName: 'Peter',
        lastName: 'Fischer',
        imageUrl:
          'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg',
      };

      const addressdto: addressDto = {
        streetAddress: 'Am Sonnenbach 1',
        city: 'weinheim',
        state: 'Baden-Württemberg',
        country: 'Auenland',
        zip: '7474',
      };
      describe('create user', () => {
        it('should throw if account is not a user', () => {
          return pactum
            .spec()
            .post('/user/create')
            .withHeaders({
              Authorization: 'Bearer $S{supplierToken}',
            })
            .withBody({
              ...userdto,
              ...addressdto,
            })
            .expectJson({
              message: 'You are not authorized to create a user account',
              statusCode: 400,
            });
        });
        it('should create a user', () => {
          return pactum
            .spec()
            .post('/user/create')
            .withHeaders({ Authorization: 'Bearer $S{userToken}' })
            .withBody({
              ...userdto,
              ...addressdto,
            })
            .expectStatus(201);
        });
        it('should throw if user already exists on Account', () => {
          return pactum
            .spec()
            .post('/user/create')
            .withHeaders({ Authorization: 'Bearer $S{userToken}' })
            .withBody({
              ...userdto,
              ...addressdto,
            })
            .expectJson({
              message: 'The account already has a User',
              statusCode: 400,
            });
        });
      });
    });
  });
};
