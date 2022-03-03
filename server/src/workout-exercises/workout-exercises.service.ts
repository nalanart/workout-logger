import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workout } from 'src/workouts/entities/workout.entity';
import { getRepository, Repository } from 'typeorm';
import { CreateWorkoutExerciseDto } from './dtos/create-workout-exercise.dto';
import { WorkoutExercise } from './entities/workout-exercise.entity';

@Injectable()
export class WorkoutExercisesService {
  constructor(
    @InjectRepository(WorkoutExercise)
    private workoutExercisesRepository: Repository<WorkoutExercise>,
  ) {}

  async createExercise(
    createWorkoutExerciseDto: CreateWorkoutExerciseDto,
    workoutId: number,
  ): Promise<WorkoutExercise> {
    const newExercise = this.workoutExercisesRepository.create(
      createWorkoutExerciseDto,
    );
    const workoutsRepository = getRepository(Workout);
    const workout = await workoutsRepository.findOne(workoutId);
    newExercise.workout = workout;
    return this.workoutExercisesRepository.save(newExercise);
  }
}
