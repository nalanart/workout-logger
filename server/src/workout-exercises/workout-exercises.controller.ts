import { Controller } from '@nestjs/common';
import { WorkoutExercisesService } from './workout-exercises.service';

@Controller('workout-exercises')
export class WorkoutExercisesController {
  constructor(private readonly workoutExercisesService: WorkoutExercisesService) {}
}
