import { AuthGuardPublic } from '@app/shared/guards/auth.guard';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SubscriptionServiceModule } from './subscription-service.module';

async function bootstrap() {
  const app = await NestFactory.create(SubscriptionServiceModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AuthGuardPublic());

  const config = new DocumentBuilder()
    .setTitle('subscription-service')
    .setDescription('Subscriptions service to manage Subscription resource')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);

  console.log('Listening on.... ' + process.env.PORT);
}
bootstrap();