import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './hero.entity';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

@Module({
  controllers: [HeroesController],
  imports: [TypeOrmModule.forFeature([Hero])],
  providers: [HeroesService],
})
export class HeroesModule {}
