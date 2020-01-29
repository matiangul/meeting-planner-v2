import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Meeting } from './meeting.entity';
import { MeetingService } from './meeting.service';

@Crud({
  model: {
    type: Meeting,
  },
  params: {
    id: {
      field: 'id',
      primary: true,
      type: 'uuid',
    },
  },
  validation: {
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    whitelist: true,
  },
})
@Controller('meetings')
export class MeetingController {
  constructor(public service: MeetingService) {}
}
