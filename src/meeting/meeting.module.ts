import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingController } from './meeting.controller';
import { Meeting } from './meeting.entity';
import { MeetingService } from './meeting.service';

@Module({
  controllers: [MeetingController],
  imports: [TypeOrmModule.forFeature([Meeting])],
  providers: [MeetingService],
})
export class MeetingModule {}
