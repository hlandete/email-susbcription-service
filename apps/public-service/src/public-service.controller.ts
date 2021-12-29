import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PublicServiceService } from './public-service.service';
@Controller()
export class PublicServiceController {
  constructor(private readonly publicServiceService: PublicServiceService) {}

  @Post('create')
  async createSubscription(@Body() createSubscriptionBody: CreateSubscriptionDto){
    return this.publicServiceService.createSubscription(createSubscriptionBody).toPromise();
  }

  @Post('cancel/:id')
  cancelSubscription(@Param('id') id): any{
    return this.publicServiceService.cancelSubscription(id).toPromise();
  }
}
