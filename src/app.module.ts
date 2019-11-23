import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './meeting/heroes.module';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(), HeroesModule],
  providers: [AppService],
})
export class AppModule {}
