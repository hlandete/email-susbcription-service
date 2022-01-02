import { AuthGuardPublic } from '@app/shared/guards/auth.guard';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SubscriptionServiceModule } from './subscription-service.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(SubscriptionServiceModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  app.useGlobalGuards(new AuthGuardPublic());

  const config = new DocumentBuilder()
    .setTitle('subscription-service')
    .setDescription('Subscriptions service to manage Subscription resource')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3001);

  console.log('Listening on.... ' + process.env.PORT || 3001);
}
bootstrap();
