import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { QuerySubscriptionDto } from '@app/shared/dto/query-subscription.dto';
import { UpdateSubscriptionDto } from '@app/shared/dto/update-subscription.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Subscription, SubscriptionDocument } from './schema/subscription.schema';

@Injectable()
export class SubscriptionService {
  constructor(@InjectModel(Subscription.name) private subscriptionModel: Model<SubscriptionDocument>){}

  create(createSubscriptionDto: CreateSubscriptionDto) {
    const newSubscription = {...createSubscriptionDto, newsletterFlag: true}
    // Check if the email exists for an specific campaign. If so we reactivate the flag to true
    return this.subscriptionModel.findOne({email: newSubscription.email, campaignId: newSubscription.campaignId}).exec().then( (subExists)=>{
      if(subExists){
        return this.update(subExists._id, newSubscription);
      }
      else{
        const createdSubscription = new this.subscriptionModel(newSubscription);
        return createdSubscription.save();
      }
    });
  }

  findAll(): Promise<Subscription[]> {
    return this.subscriptionModel.find().exec();
  }

  findOne(id: string): Promise<Subscription> {
    return this.subscriptionModel.findById(id).exec();
  }

  findByFilter(query: QuerySubscriptionDto): Promise<Subscription[]> {
    console.log(query);
    return this.subscriptionModel.find(query).exec();
  }

  update(id: string, updateSubscriptionDto: UpdateSubscriptionDto): Promise<any> {
    return this.subscriptionModel.updateOne({_id: id}, updateSubscriptionDto).exec();
  }

  remove(id: string) {
    return `This action removes a #${id} subscription`;
  }
}
