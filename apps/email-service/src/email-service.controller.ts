import { QuerySubscriptionDto } from '@app/shared/dto/query-subscription.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmailServiceService } from './email-service.service';

@Controller('mail')
export class EmailServiceController {
  constructor(private readonly emailServiceService: EmailServiceService) {}

  @Post('sendAll')
  sendAllEmail(){
    return this.emailServiceService.sendFilteredEmail({});
  }

  @Post('sendFiltered')
  sendEmail(@Body() sendEmailBody: QuerySubscriptionDto): Promise<any> {
    return this.emailServiceService.sendFilteredEmail(sendEmailBody);
  }
}
