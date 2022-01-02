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
    SharedModule.register(), 
    HttpModule,
    MailerModule.forRoot({
      transport: `smtps://${process.env.MAILING_USER}@${process.env.MAILING_DOMAIN}:${process.env.MAILING_PASS}@smtp.${process.env.MAILING_DOMAIN}`,
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
