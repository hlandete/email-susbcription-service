import { IsGender } from "@app/shared/validators/isGender.validator";
import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

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
