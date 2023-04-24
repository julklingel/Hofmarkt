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
              error: 'Forbidden',
              message: 'Forbidden resource',
              statusCode: 403,
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

    describe('patch user', () => {
      const updatedUserDto: userDto = {
        firstName: 'John',
        lastName: 'Doe',
      };
  
      const updatedAddressDto: addressDto = {
        streetAddress: '123 New Street',
        city: 'New City',
        state: 'New State',
        country: 'New Country',
        zip: '12345',
      };
  
      it('should throw if account is not a user', () => {
        return pactum
          .spec()
          .patch('/user/update')
          .withHeaders({
            Authorization: 'Bearer $S{supplierToken}',
          })
          .withBody({
            ...updatedUserDto,
            ...updatedAddressDto,
          })
          .expectJson({
            error: 'Forbidden',
            message: 'Forbidden resource',
            statusCode: 403,
          });
      });
  
      it('should update a user', () => {
        return pactum
          .spec()
          .patch('/user/update')
          .withHeaders({ Authorization: 'Bearer $S{userToken}' })
          .withBody({
            ...updatedUserDto,
            ...updatedAddressDto,
          })
          .expectStatus(200);
      });
  
      it('should throw if user not found', () => {
        return pactum
          .spec()
          .patch('/user/update')
          .withHeaders({ Authorization: 'Bearer $S{nonExistentUserToken}' })
          .withBody({
            ...updatedUserDto,
            ...updatedAddressDto,
          })
          .expectJson({
            message: 'User not found',
            statusCode: 404,
          });
      });
    });
    
  });
};
