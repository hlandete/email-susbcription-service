import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { QuerySubscriptionDto } from '@app/shared/dto/query-subscription.dto';
import { HttpService } from '@nestjs/axios';
import { BadGatewayException, Injectable } from '@nestjs/common';
import { resolve } from 'path/posix';
import { map } from 'rxjs';

@Injectable()
export class EmailServiceService {
  constructor(private readonly httpService: HttpService){}
  async sendFilteredEmail(query: QuerySubscriptionDto): Promise<any> {

    query.newsletterFlag = true;

    const subscriptions: Array<CreateSubscriptionDto> = await this.httpService.get(process.env.SUBSCRIPTION_URL+'byFilter/'+query).pipe(map(response => response.data)).toPromise();

    let response = [];
    subscriptions.forEach(sub => {
      response.push(this.processEmail(sub));
    });
    
    return response;
  }

  processEmail(sub){

    const emailData = {
      to: sub.email,
      from: 'support@test.com',
      subject: 'Testing Nest Mailermodule with template',
      template: sub.campaignId+'.hbs', 
      context: sub,
  }

    return new Promise((resolve, reject) =>{
      try {
       resolve(true)
    } catch (e) {
        reject(new BadGatewayException('Email send failed'));
    }
    })
   
  }
}
