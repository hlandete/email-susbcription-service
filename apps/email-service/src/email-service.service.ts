import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { QuerySubscriptionDto } from '@app/shared/dto/query-subscription.dto';
import { ISubscription } from '@app/shared/interfaces/subscription.interface';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

interface ProcessEmailResponse {
  email: string;
  success: boolean;
}

@Injectable()
export class EmailServiceService {
  constructor(private readonly httpService: HttpService, private readonly mailerService: MailerService){}
  async sendEmails(query: QuerySubscriptionDto): Promise<any> {

    const subscriptions = await this.getSubscriptionData(query);
     
    let response = subscriptions.map(sub => {
      return this.processEmail(sub);
    });
    
    Promise.all(response).then((res:Array<ProcessEmailResponse>)=>{
         // Group by success and failed emails
        res.reduce(function (r, a) {
          a.success ? r.success.push(a.email) : r.error.push(a.email)
          return r;
      }, {success: [], error: []});
    })
    
    return response;
  }

  processEmail(sub): Promise<ProcessEmailResponse>{

    const emailData: ISendMailOptions = {
      to: sub.email,
      from: 'support@test.com',
      subject: 'Testing Nest Mailermodule with template',
      template: sub.campaignId+'.hbs', 
      context: sub,
  }

    return new Promise(async (resolve, reject) =>{
      try {
        await this.mailerService.sendMail(emailData);
        resolve({email: sub.email, success: true})
    } catch (e) {
        reject({email: sub.email, success: false});
    }
    })
   
  }

  getSubscriptionData(query: QuerySubscriptionDto): Promise<Array<ISubscription>> {
    query.newsletterFlag = true;

    const params = {};

    Object.keys(query).forEach(key =>{
      params[key] = query[key];
    })

    return this.httpService.get(process.env.SUBSCRIPTION_SERVICE_URL,  {params}).pipe(map(response => response.data)).toPromise();
  }
}

