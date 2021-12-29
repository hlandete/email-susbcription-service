import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';

describe('SubscriptionServiceController', () => {
  let subscriptionController: SubscriptionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionController],
      providers: [SubscriptionService],
    }).compile();

    subscriptionController = app.get<SubscriptionController>(SubscriptionController);
  });

  describe('root', () => {
    it('create"', () => {
      const body: CreateSubscriptionDto = {
        "email": "email@email.com", 
        "firstName": "string",
        "birthDate": new Date("2021-12-24"),
        "campaignId": 1
    }
      expect(subscriptionController.create(body)).toBe({
        "email": "email@email.com", 
        "firstName": "string",
        "birthDate": new Date("2021-12-24"),
        "campaignId": 1
    });
    });
  });
});
