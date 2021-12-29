import { CreateSubscriptionDto } from '@app/shared/dto/create-subscription.dto';
import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { catchError, map, Observable } from 'rxjs';
import { UpdateSubscriptionDto } from '@app/shared/dto/update-subscription.dto';


@Injectable()
export class PublicServiceService {
  
  constructor(private readonly httpService: HttpService){}


   createSubscription(body: CreateSubscriptionDto):  Observable<any>{
     return this.httpService.post(process.env.SUBSCRIPTION_SERVICE_URL, body).pipe(map(response => response.data.email)).pipe(catchError(e => {
      throw e;
    })
    );
  }

  cancelSubscription(id: string){
    const updateBody: UpdateSubscriptionDto = {newsletterFlag: false}
    return this.httpService.patch(process.env.SUBSCRIPTION_SERVICE_URL+id, updateBody).pipe(map(response => response.data.email)).pipe(catchError(e => {
      throw e;
    })
    );
  }
}
