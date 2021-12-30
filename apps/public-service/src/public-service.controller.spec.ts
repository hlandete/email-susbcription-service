import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { PublicController } from './public-service.controller';
import { PublicService } from './public-service.service';

describe('PublicServiceController', () => {
  let publicController: PublicController;

  const mockServiceResponse = {
    "_id": "61cd77aeaa725d5d19e189d6",
    "email": "example@email.com", 
    "firstName": "string",
    "birthDate": new Date("2021-12-24"),
    "campaignId": 1
}
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [PublicController],
      providers: [{
        provide: PublicService,
        useValue: {
          get: jest.fn(() => mockServiceResponse)
        }
      }],
    }).compile();

    publicController = app.get<PublicController>(PublicController);
  });

    it('create', async () => {
      const body: CreateSubscriptionDto = {
        "email": "example@email.com", 
        "firstName": "string",
        "birthDate": new Date("2021-12-24"),
        "campaignId": 1
    }
      expect(await publicController.createSubscription(body)).toBe({id: "61cd77aeaa725d5d19e189d6"});
    });

    it('cancel', async () => {
      expect(await publicController.cancelSubscription('61cd77aeaa725d5d19e189d6')).toBe({id: "61cd77aeaa725d5d19e189d6"});
    });

});
