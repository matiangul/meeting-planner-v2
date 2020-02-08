import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingModule } from './meeting/meeting.module';

@Module({ imports: [TypeOrmModule.forRoot(), MeetingModule] })
export class AppModule {}
