import { Module } from '@nestjs/common';
import { IncomingModule } from './animals/incoming/incoming.module';

@Module({
  imports: [
    IncomingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
