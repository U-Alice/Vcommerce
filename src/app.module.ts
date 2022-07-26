import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import 'dotenv/config'
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
