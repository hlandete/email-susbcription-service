import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { PublicServiceController } from './public-service.controller';
import { PublicServiceService } from './public-service.service';

describe('PublicServiceController', () => {
  let publicServiceController: PublicServiceController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [PublicServiceController],
      providers: [PublicServiceService],
    }).compile();

    publicServiceController = app.get<PublicServiceController>(PublicServiceController);
  });


    it('create', async () => {
      const body: CreateSubscriptionDto = {
        "email": "example@email.com", 
        "firstName": "string",
        "birthDate": new Date("2021-12-24"),
        "campaignId": 1
    }
      expect(await publicServiceController.createSubscription(body)).toBe({email: "example@email.com"});
    });

    it('cancel', async () => {
      expect(await publicServiceController.cancelSubscription('')).toBe({email: "example@email.com"});
    });

});
