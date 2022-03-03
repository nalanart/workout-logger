import { Body, Controller, Post, Query } from '@nestjs/common';
import { CreateWorkoutExerciseDto } from './dtos/create-workout-exercise.dto';
import { WorkoutExercise } from './entities/workout-exercise.entity';
import { WorkoutExercisesService } from './workout-exercises.service';

@Controller('workout-exercises')
export class WorkoutExercisesController {
  constructor(
    private readonly workoutExercisesService: WorkoutExercisesService,
  ) {}

  @Post()
  async createOne(
    @Body() createWorkoutExerciseDto: CreateWorkoutExerciseDto,
    @Query('workoutId') workoutId: number,
  ): Promise<WorkoutExercise> {
    return this.workoutExercisesService.createWorkoutExercise(
      createWorkoutExerciseDto,
      workoutId,
    );
  }
}
