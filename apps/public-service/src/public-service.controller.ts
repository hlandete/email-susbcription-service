import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ResponseInterceptor } from '../interceptors/api_response.interceptor';
import { PublicService } from './public-service.service';
@Controller()
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Post('create')
  async createSubscription(@Body() createSubscriptionBody: CreateSubscriptionDto){
    return this.publicService.createSubscription(createSubscriptionBody);
  }

  @Get('cancel/:id')
  cancelSubscription(@Param('id') id): any{
    return this.publicService.cancelSubscription(id);
  }
}
