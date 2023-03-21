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
    const dto: signupDto = {
      email: process.env.TEST_EMAIL,
      password: process.env.TEST_PASSWORD,
      isSupplier: false,
    };
    describe('Signup', () => {
      it('should throw if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({ password: dto.password, isSupplier: dto.isSupplier })
          .expectStatus(400);
      });
      it('should throw if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({ email: dto.email, isSupplier: dto.isSupplier })
          .expectStatus(400);
      });
      it('should throw if isSupplier is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({ email: dto.email, password: dto.password })
          .expectStatus(400);
      });
      it('should create a new user', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('Login', () => {
      it('should throw if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({ password: dto.password })
          .expectStatus(400);
      });
      it('should throw if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({ email: dto.email })
          .expectStatus(400);
      });
      it('should throw if password is incorrect', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({ email: dto.email, password: 'wrong' })
          .expectStatus(403);
      });
      it('should login a user', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({ email: dto.email, password: dto.password })
          .expectStatus(200);
      });
    });
  });
});
