import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [ConfigModule.forRoot(/*{ envFilePath: `${process.env.NODE_ENV}.env` }*/)],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
