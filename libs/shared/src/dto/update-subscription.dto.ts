import { IsGender } from '@app/shared/validators/isGender.validator';
import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsDate, IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateSubscriptionDto } from './create-subscription.dto';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {

   /* @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsGender()
    gender: string;

    @IsOptional()
    @IsDate()
    birthDate: Date;*/

    @IsOptional()
    @IsBoolean()
    newsletterFlag: boolean;

}

