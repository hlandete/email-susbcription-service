import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { HttpException, Injectable, UseInterceptors } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { catchError, map, Observable } from 'rxjs';
import { UpdateSubscriptionDto } from '@app/shared/dto/update-subscription.dto';
import { ResponseInterceptor } from '../interceptors/api_response.interceptor';
import { Subscription } from 'apps/subscription-service/src/subscription/schema/subscription.schema';


@Injectable()
export class PublicService {
  
  constructor(private readonly httpService: HttpService){}

   createSubscription(body: CreateSubscriptionDto){
     return this.httpService.post(process.env.SUBSCRIPTION_SERVICE_URL, body).pipe(map(response => response.data));
  }

  cancelSubscription(id: string){
    const updateBody: UpdateSubscriptionDto = {newsletterFlag: false}
    return this.httpService.patch(process.env.SUBSCRIPTION_SERVICE_URL+id, updateBody).pipe(map(response => response.data));
  }
}
