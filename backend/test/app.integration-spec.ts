import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { PrismaService } from '../src/db-module/prisma.service';
import { AppModule } from '../src/app/app.module';
import { signupDto } from '../src/auth/dto';

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
    const dto = {
      companyName: 'test',
      companyLogo: 'test',
      companyPhone: 'test',
      companyImage: 'test',
      companyBio: 'test',
      streetAddress: 'test',
      city: 'test',
      state: 'test',
      country: 'test',
      zip: 'test',
    };
    describe('create supplier', () => {
      it('should throw if user is not a supplier', () => {
        return pactum
          .spec()
          .post('/supplier/create')
          .withHeaders({
            Authorization: 'Bearer $S{userToken}',
            'Content-Type': 'application/x-www-form-urlencoded',
          })
          .withForm(dto)
          .expectStatus(400)
          .expectJson({
            message: 'You are not authorized to create a supplier account',
            statusCode: 400,
          });
      });

      it.todo('should throw if user already has a supplier');

      it.todo('should throw if company name is empty');

      it.todo('should throw if company name is already taken');

      it.todo('should create a new supplier');
    });
  });
});
function expectJson(arg0: { message: string }) {
  throw new Error('Function not implemented.');
}
