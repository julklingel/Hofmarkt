import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary.provider';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule], // Add ConfigModule here
  providers: [
    CloudinaryService,
    {
      provide: CloudinaryProvider,
      useFactory: (configService: ConfigService) => {
        return new CloudinaryProvider(configService);
      },
      inject: [ConfigService],
    },
  ],
  exports: [CloudinaryProvider, CloudinaryService],
})
export class CloudinaryModule {}
