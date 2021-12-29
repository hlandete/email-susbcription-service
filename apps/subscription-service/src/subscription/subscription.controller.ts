import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { QuerySubscriptionDto } from '@app/shared/dto/query-subscription.dto';
import { UpdateSubscriptionDto } from '@app/shared/dto/update-subscription.dto';
import { AuthGuardPrivate } from '@app/shared/guards/auth.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';


@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @UseGuards(AuthGuardPrivate)
  @Get('filtered')
  findByFilter(@Query() query: QuerySubscriptionDto) {
    return this.subscriptionService.findByFilter(query);
  }

  
  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @UseGuards(AuthGuardPrivate)
  @Get()
  findAll() {
    return this.subscriptionService.findAll();
  }

  @UseGuards(AuthGuardPrivate)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionService.update(id, updateSubscriptionDto);
  }

  @UseGuards(AuthGuardPrivate)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(id);
  }


}
