import { ConfigService } from '@nestjs/config';

export class ConfigServiceMock extends ConfigService {
  get(key: string): string {
    return 'test_value';
  }
}
