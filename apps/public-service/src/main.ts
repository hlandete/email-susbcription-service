import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PublicServiceModule } from './public-service.module';

async function bootstrap() {
  const app = await NestFactory.create(PublicServiceModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('public-service')
    .setDescription('Public service to be called from the front')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);

  console.log('Listening on.... ' + process.env.PORT);
}
bootstrap();
