import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';
import { config } from '../ormconfig';
import { SetsModule } from './sets/sets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
     ExercisesModule,
     SetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
