import { SharedModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionServiceController } from './subscription-service.controller';
import { SubscriptionServiceService } from './subscription-service.service';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [
            SharedModule.register(),
            MongooseModule.forRoot(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`),
            SubscriptionModule
          ],
  controllers: [SubscriptionServiceController],
  providers: [SubscriptionServiceService],
})
export class SubscriptionServiceModule {}
