import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Meeting } from './meeting.entity';

@Injectable()
export class MeetingService extends TypeOrmCrudService<Meeting> {
  constructor(@InjectRepository(Meeting) repo: Repository<Meeting>) {
    super(repo);
  }
}
