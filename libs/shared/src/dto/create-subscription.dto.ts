import { IsGender } from "@app/shared/validators/isGender.validator";
import { IsDateString, IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSubscriptionDto {
    @IsEmail()
    email: string;
    
    @IsDateString()
    birthDate: Date;

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
