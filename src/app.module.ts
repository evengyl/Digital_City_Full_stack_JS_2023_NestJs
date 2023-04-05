import * as AdminJSTypeorm from '@adminjs/typeorm'
import AdminJS from 'adminjs'
import { AdminModule } from '@adminjs/nestjs';
import { Module } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common/enums';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckUserMiddleware } from './shared/middlewares/checkUser.middleware';
import { IncomingModule } from './_animals/incoming/incoming.module';
import { AuthModule } from './_auth/auth.module';
import { UsersModule } from './_users/users.module';

import { UsersEntity } from './shared/entities/users/Users.entity';
import { AnimalsEntity } from './shared/entities/animals/Animals.entity';
import { CategoryAnimalsEntity } from './shared/entities/animals/CategoryAnimals.entity';



const usersNavigation = {
  name: 'UsersEntity',
  icon: 'User',
}



AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
})


const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

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
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            { resource : UsersEntity },
            { resource : AnimalsEntity},
            { resource : CategoryAnimalsEntity}
          ],
          options : {
            navigation : usersNavigation
          }
        },
        
        // auth: {
        //   authenticate,
        //   cookieName: 'adminjs',
        //   cookiePassword: 'secret'
        // },
        // sessionOptions: {
        //   resave: true,
        //   saveUninitialized: true,
        //   secret: 'secret'
        // },
      }),
    }),
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
