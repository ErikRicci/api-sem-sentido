import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JSONResponseInterceptor } from './interceptors/json_response.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/');
  app.useGlobalInterceptors(new JSONResponseInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3000);
}

bootstrap();
