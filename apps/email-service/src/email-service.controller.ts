import { QuerySubscriptionDto } from '@app/shared/dto/query-subscription.dto';
import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { EmailServiceService } from './email-service.service';
import { existsSync } from 'fs';

interface getTemplateQuery {
  id: string,

}
@Controller('mail')
export class EmailServiceController {
  constructor(private readonly emailServiceService: EmailServiceService) {}

  @Get()
  getView(@Res() res: Response, @Query() query: QuerySubscriptionDto){

    
    return this.emailServiceService.getSubscriptionData(query).then(subscription =>{
      //It only gets the first subscription that matches de query for testing pruporses. If there is no subscriptions it returns a mockup subcription
      const sub = subscription.length ? subscription[0] : {
        "_id" : "61c5c2b08980e468a486e94b",
        "campaignId" : 1,
        "newsletterFlag" : true,
        "birthDate" : "2021-12-24T00:00:00.000Z",
        "firstName" : "Mockup Name",
        "email" : "mockup@email.com",
    };

    const templateFile = existsSync(__dirname + '/templates' + '/' + sub.campaignId + '.hbs') ? sub.campaignId + '.hbs' : 'default.hbs';
    
      return res.render(
        templateFile,
        sub
      );
    });
    
  }
  @Post('sendAll')
  sendAllEmail(){
    return this.emailServiceService.sendEmails({});
  }

  @Post('sendFiltered')
  sendEmail(@Body() sendEmailBody: QuerySubscriptionDto): Promise<any> {
    return this.emailServiceService.sendEmails(sendEmailBody);
  }


}
