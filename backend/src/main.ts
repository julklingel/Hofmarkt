import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const port = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Hofmarkt API')
    .setDescription('The Hofmarkt API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", 'https://backend-6w5lejptaa-lm.a.run.app/'],
          styleSrc: ["'self'", 'https://backend-6w5lejptaa-lm.a.run.app/'],
          imgSrc: ["'self'"],
        },
      },
      xssFilter: true,
    }),
  );
  await app.listen(port, '0.0.0.0');
}

bootstrap();
