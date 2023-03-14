import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app/app.module';

describe('App e2e test', () => {
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });
  it.todo('should pass');
});
