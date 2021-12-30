import { QuerySubscriptionDto } from '@app/shared/dto/query-subscription.dto';
import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { query, Response } from 'express';
import { EmailServiceService } from './email-service.service';


interface getTemplateQuery {
  id: string,

}
@Controller('mail')
export class EmailServiceController {
  constructor(private readonly emailServiceService: EmailServiceService) {}

  @Get()
  getView(@Res() res: Response, @Query() query: QuerySubscriptionDto){

    const sub = {
      _id: "61c5c2b08980e468a486e94b",
      campaignId: 1,
      newsletterFlag : true,
      birthDate: "2021-12-24T00:00:00.000Z",
      firstName: "string",
      email: "email@email.com",
  };
    return res.render(
      sub.campaignId + '.hbs',
      sub
    );
    
    return this.emailServiceService.getSubscriptionData(query).then(subscription =>{
      //It only gets the first subscription that matches de query for testing pruporses
      const sub = {
        "_id" : "61c5c2b08980e468a486e94b",
        "campaignId" : 1,
        "newsletterFlag" : true,
        "birthDate" : "2021-12-24T00:00:00.000Z",
        "firstName" : "string",
        "email" : "email@email.com",
    };
      return res.render(
        sub.campaignId + '.hbs',
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
