import { SharedModule } from '@app/shared';
import { HttpServiceInterceptor } from '@app/shared/interceptors/http.interceptor';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EmailServiceController } from './email-service.controller';
import { EmailServiceService } from './email-service.service';

@Module({
  imports: [HttpModule ,SharedModule],
  controllers: [EmailServiceController],
  providers: [{
    provide: 'APP_INTERCEPTOR',
    useClass: HttpServiceInterceptor,
  },
  EmailServiceService],
})
export class EmailServiceModule {}
