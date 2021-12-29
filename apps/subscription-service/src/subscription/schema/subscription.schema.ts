import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type SubscriptionDocument = Subscription & Document;


@Schema()
export class Subscription {
  @ApiProperty()
  @Prop()
  email: string;
  
  @ApiProperty()
  @Prop()
  firstName?: string;

  @ApiProperty()
  @Prop()
  gender?: string;

  @ApiProperty()
  @Prop()
  birthDate: Date;

  @ApiProperty()
  @Prop()
  newsletterFlag: boolean;

  @ApiProperty()
  @Prop()
  campaignId: number;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);