import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { PrismaService } from '../src/db-module/prisma.service';
import { AppModule } from '../src/app/app.module';
import { signupDto } from '../src/auth/dto';
import { supplierDto } from 'src/supplier/dto';
import { addressDto } from 'src/address';

describe('App integration test', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true }),
    );
    await app.init();
    await app.listen(4444);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
    pactum.request.setBaseUrl('http://localhost:4444');
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Auth', () => {
    const supplierdto: signupDto = {
      email: process.env.SUPPLIER_TEST_EMAIL,
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
      it('should throw if password is incorrect', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({ email: supplierdto.email, password: 'wrong' })
          .expectStatus(403);
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
  describe('Supplier', () => {
    const supplierdto: supplierDto = {
      companyName: 'jackfruit garden',
      companyLogo: 'jackfruit.png',
      companyPhone: 'j4ckfru1t',
      companyImage: 'jacknfruit.png',
      companyBio: 'jack loves fruit',
      featured: false,
    };
    const addressdto: addressDto = {
      streetAddress: 'bergweg 1',
      city: 'jacksonville',
      state: 'jackson',
      country: 'jackland',
      zip: '7474',
    };
    describe('create supplier', () => {
      it('should throw if account is not a supplier', () => {
        return pactum
          .spec()
          .post('/supplier/create')
          .withHeaders({
            Authorization: 'Bearer $S{userToken}',
          })
          .withBody({
            ...supplierdto,
            ...addressdto,
          })
          .expectJson({
            message: 'You are not authorized to create a supplier account',
            statusCode: 400,
          });
      });

      it('should throw if company name is empty', () => {
        return pactum
          .spec()
          .post('/supplier/create')
          .withHeaders({
            Authorization: 'Bearer $S{supplierToken}',
          })
          .withBody({
            companyName: '',
            companyLogo: supplierdto.companyLogo,
            companyPhone: supplierdto.companyPhone,
            companyImage: supplierdto.companyImage,
            companyBio: supplierdto.companyBio,
            featured: supplierdto.featured,
            ...addressdto,
          })
          .expectJson({
            error: 'Bad Request',
            message: ['companyName should not be empty'],
            statusCode: 400,
          });
      });

      it('should create a new supplier', () => {
        return pactum
          .spec()
          .post('/supplier/create')
          .withHeaders({
            Authorization: 'Bearer $S{supplierToken}',
          })
          .withBody({
            ...supplierdto,
            ...addressdto,
          })
          .expectStatus(201);
      });
      console.log('Data sent to create:', {
        ...supplierdto,
        ...addressdto,
      });

      it.todo('should throw if account already has a supplier');

      it.todo('should throw if company name is already taken');
    });
  });
});
