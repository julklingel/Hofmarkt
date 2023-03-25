import { INestApplication } from '@nestjs/common';
import * as pactum from 'pactum';
import { PrismaService } from '../src/db-module/prisma.service';
import { signupDto } from '../src/auth/dto';

export const authTests = (app: INestApplication, prisma: PrismaService) => {
  describe('Auth', () => {
    const supplierdto: signupDto = {
      email: process.env.SUPPLIER_TEST_EMAIL,
      password: process.env.SUPPLIER_TEST_PASSWORD,
      isSupplier: true,
    };
    const supplierdto_two: signupDto = {
      email: process.env.SUPPLIER_TEST_EMAIL_TWO,
      password: process.env.SUPPLIER_TEST_PASSWORD,
      isSupplier: true,
    };
    const userdto: signupDto = {
      email: process.env.USER_TEST_EMAIL,
      password: process.env.USER_TEST_PASSWORD,
      isSupplier: false,
    };

    describe('Signup', () => {
      it('should throw if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            password: supplierdto.password,
            isSupplier: supplierdto.isSupplier,
          })
          .expectStatus(400);
      });
      it('should throw if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            email: supplierdto.email,
            isSupplier: supplierdto.isSupplier,
          })
          .expectStatus(400);
      });
      it('should throw if isSupplier is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            email: supplierdto.email,
            password: supplierdto.password,
          })
          .expectStatus(400);
      });
      it('should create a new supplier', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(supplierdto)
          .expectStatus(201);
      });
      it('should create another new supplier', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(supplierdto_two)
          .expectStatus(201);
      });
      it('should create a new user', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(userdto)
          .expectStatus(201);
      });
    });

    describe('Login', () => {
      it('should throw if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({ password: supplierdto.password })
          .expectStatus(400);
      });
      it('should throw if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({ email: supplierdto.email })
          .expectStatus(400);
      });
      it('should login a supplier', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            email: supplierdto.email,
            password: supplierdto.password,
          })
          .expectStatus(200)
          .stores('supplierToken', 'access_token');
      });
      it('should throw if password is incorrect', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({ email: supplierdto.email, password: 'wrong' })
          .expectStatus(403);
      });
      it('should login another supplier', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            email: supplierdto_two.email,
            password: supplierdto.password,
          })
          .expectStatus(200)
          .stores('supplierToken_two', 'access_token');
      });
      it('should login a user', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            email: userdto.email,
            password: userdto.password,
          })
          .expectStatus(200)
          .stores('userToken', 'access_token');
      });
    });
  });
};
