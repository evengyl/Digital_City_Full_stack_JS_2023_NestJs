import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomingModule } from './animals/incoming/incoming.module';

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
    IncomingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
