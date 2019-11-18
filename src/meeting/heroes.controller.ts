import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Hero } from './hero.entity';
import { HeroesService } from './heroes.service';

@Crud({
  model: {
    type: Hero,
  },
  validation: {
    whitelist: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
  },
})
@Controller('heroes')
export class HeroesController {
  constructor(public service: HeroesService) {}
}
