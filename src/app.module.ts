import { MiddlewareConsumer, Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UserController } from './user/user.controller';
import 'dotenv/config'
import { UserMiddleware } from './middlewares/user.middleware';
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService],
})
export class AppModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(UserMiddleware).forRoutes("user")
  }
}
