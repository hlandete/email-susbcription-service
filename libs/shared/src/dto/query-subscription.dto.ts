import { IsGender } from "@app/shared/validators/isGender.validator";
import { IsBoolean, IsDateString, IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class QuerySubscriptionDto  {

    @IsOptional()
    @IsEmail()
    _id?: string;

    @IsOptional()
    @IsEmail()
    email?: string;
    
    @IsOptional()
    @IsDateString()
    birthDate?: Date;

    @IsOptional()
    @IsNumber()
    campaignId?: number;

    @IsOptional()
    @IsString()
    firstName?: string;

    @IsOptional()
    @IsBoolean()
    newsletterFlag?: boolean;

    @IsOptional()
    @IsGender({
        message: 'gender must be one of these characters -> M | F | O',
      })
    gender?: string;

}
