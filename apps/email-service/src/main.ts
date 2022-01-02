import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EmailServiceModule } from './email-service.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(EmailServiceModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  
  const config = new DocumentBuilder()
  .setTitle('email-service')
  .setDescription('Email service to manage email sending')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  app.setBaseViewsDir(__dirname + '/templates');
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT || 3002);
  console.log('Listening on.... ' + process.env.PORT || 3002);
}
bootstrap();
