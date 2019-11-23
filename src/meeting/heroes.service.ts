import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Hero } from './hero.entity';

@Injectable()
export class HeroesService extends TypeOrmCrudService<Hero> {
  constructor(@InjectRepository(Hero) repo: Repository<Hero>) {
    super(repo);
  }
}
