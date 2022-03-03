import { Module } from '@nestjs/common';
import { WorkoutExercisesService } from './workout-exercises.service';
import { WorkoutExercisesController } from './workout-exercises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutExercise } from './entities/workout-exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutExercise])],
  controllers: [WorkoutExercisesController],
  providers: [WorkoutExercisesService],
})
export class WorkoutExercisesModule {}
