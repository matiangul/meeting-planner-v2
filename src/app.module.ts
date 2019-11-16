import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './meeting/heroes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
