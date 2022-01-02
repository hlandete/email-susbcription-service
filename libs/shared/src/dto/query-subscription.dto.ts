import { IsGender } from "@app/shared/validators/isGender.validator";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class QuerySubscriptionDto  {

    @IsOptional()
    _id?: string;

    @IsOptional()
    @IsEmail()
    email?: string;
    
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    birthDate?: Date;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    campaignId?: number;

    @IsOptional()
    @IsString()
    firstName?: string;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    newsletterFlag?: boolean;

    @IsOptional()
    @IsGender({
        message: 'gender must be one of these characters -> M | F | O',
      })
    gender?: string;

}
