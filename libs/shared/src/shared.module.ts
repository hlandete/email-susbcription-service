import { DynamicModule, Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { ConfigModule } from '@nestjs/config';

@Module({})
export class SharedModule {
  static register(): DynamicModule {
    const path = process.env.NODE_ENV !== 'local' ? '' : `./apps/${process.env.APP_NAME}/.env`;
    return {
      module: SharedModule,
      imports: [ConfigModule.forRoot({envFilePath: path})],
      providers: [SharedService],
      exports: [SharedService],
    };
  }
}
