import { SharedModule } from '@app/shared';
import { HttpServiceInterceptor } from '@app/shared/interceptors/http.interceptor';
import { HttpModule } from '@nestjs/axios';
import { MailerModule, MailerService } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { EmailServiceController } from './email-service.controller';
import { EmailServiceService } from './email-service.service';

@Module({
  imports: [
    HttpModule,
    SharedModule.register(), 
    MailerModule.forRoot({
      transport: `smtps://user@domain.com:pass@smtp.domain.com`,
      defaults: {
        from: '',
      },
      template: {
      dir: __dirname + '/templates',
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
      },
    })],
  controllers: [EmailServiceController],
  providers: [{
    provide: 'APP_INTERCEPTOR',
    useClass: HttpServiceInterceptor,
  },
  EmailServiceService
  ],
})
export class EmailServiceModule {}
