import { IsGender } from '@app/shared/validators/isGender.validator';
import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsDate, IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateSubscriptionDto } from './create-subscription.dto';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {

    @IsBoolean()
    newsletterFlag: boolean;

}

