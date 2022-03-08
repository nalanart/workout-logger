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

  async createWorkoutExercise(
    createWorkoutExerciseDto: CreateWorkoutExerciseDto,
    workoutId: number,
  ): Promise<WorkoutExercise> {
    console.log(workoutId);
    const newExercise = this.workoutExercisesRepository.create({
      name: createWorkoutExerciseDto.name,
      sets: [],
    });
    const workoutsRepository = getRepository(Workout);
    const workout = await workoutsRepository.findOne(workoutId);
    newExercise.workout = workout;
    return this.workoutExercisesRepository.save(newExercise);
  }

  async deleteWorkoutExercise(id: number) {
    this.workoutExercisesRepository.delete(id);
  }
}
