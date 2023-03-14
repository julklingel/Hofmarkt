import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { PrismaService } from '../src/db-module/prisma.service';
import { AppModule } from '../src/app/app.module';
import { loginDto, signupDto } from '../src/auth/dto/';

describe('App e2e test', () => {
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
    describe('Signup', () => {
      const dto: signupDto = {
        email: 'jack@mack.de',
        password: 'pass123',
        isSupplier: false,
      };
      it('should create a new user', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe('Login', () => {
      it('should login a user', () => {
        const dto: loginDto = {
          email: 'jack@mack.de',
          password: 'pass123',
        };
        return pactum
          .spec()
          .post('/auth/login')
          .withBody(dto)
          .expectStatus(200);
      });
    });
  });
});
