import { Module } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common/enums';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckUserMiddleware } from './shared/middlewares/checkUser.middleware';
import { IncomingModule } from './_animals/incoming/incoming.module';
import { AuthModule } from './_auth/auth.module';
import { UsersModule } from './_users/users.module';
import { UsersEntity } from './shared/entities/users/Users.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "mssql",
      host : "localhost",
      port : 1433,
      username : "evengyl",
      password : "legends",
      database : "digitalCity_fs_js_2023",
      entities : [__dirname + '/**/*.entity.{ts, js}'],
      autoLoadEntities : true,
      synchronize : true,
      extra : {
        validateConnection : false,
        trustServerCertificate : true
      },
      //logging : "all"
    }),
    TypeOrmModule.forFeature([
      UsersEntity
    ]),
    AuthModule,
    IncomingModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer)
  {
    consumer.apply(CheckUserMiddleware)
      .forRoutes(
        { path : "api/incoming/:userId", method : RequestMethod.POST },
        { path : "api/incoming/:animalId/:userId", method : RequestMethod.PUT }
      )


  }
}
