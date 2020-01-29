import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(), MeetingModule],
  providers: [AppService],
})
export class AppModule {}
