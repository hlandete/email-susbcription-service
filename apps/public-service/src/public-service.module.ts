import { SharedModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { PublicController } from './public-service.controller';
import { PublicService } from './public-service.service';
import { HttpServiceInterceptor } from '@app/shared/interceptors/http.interceptor';
import { ResponseInterceptor } from '../interceptors/api_response.interceptor';

@Module({
  imports: [HttpModule, SharedModule.register()],
  controllers: [PublicController],
  providers: [{
    provide: 'APP_INTERCEPTOR',
    useClass: HttpServiceInterceptor,
  },
  {
    provide: 'APP_INTERCEPTOR',
    useClass: ResponseInterceptor,
  },
  PublicService],

})
export class PublicModule {}
