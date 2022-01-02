import { IsGender } from "@app/shared/validators/isGender.validator";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEmail, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { isDate } from "util/types";

export class CreateSubscriptionDto {
    @IsEmail()
    email: string;
    
    @Type(() => Date)
    @IsDate()
    birthDate: Date;

    @Type(() => Number)
    @IsNumber()
    campaignId: number;

    @IsOptional()
    @IsString()
    firstName?: string;

    @IsOptional()
    @IsGender({
        message: 'gender must be one of these characters -> M | F | O',
      })
    gender?: string;

}
