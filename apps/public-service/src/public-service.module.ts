import { SharedModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios'
import { PublicServiceController } from './public-service.controller';
import { PublicServiceService } from './public-service.service';
import { HttpServiceInterceptor } from '@app/shared/interceptors/http.interceptor';

@Module({
  imports: [HttpModule, SharedModule],
  controllers: [PublicServiceController],
  providers: [{
    provide: 'APP_INTERCEPTOR',
    useClass: HttpServiceInterceptor,
    
  },
  PublicServiceService],

})
export class PublicServiceModule {}
