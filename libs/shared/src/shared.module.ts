import { DynamicModule, Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({})
export class SharedModule {
  static register(): DynamicModule {
    const path = process.env.NODE_ENV === 'docker' ? '' : `./apps/env/${process.env.APP_NAME}/${process.env.NODE_ENV}.env`;
    console.log(path);
    return {
      module: SharedModule,
      imports: [ConfigModule.forRoot({envFilePath: path})],
      providers: [SharedService],
      exports: [SharedService],
    };
  }
}
