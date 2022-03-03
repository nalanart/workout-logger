import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateExerciseDto } from './dtos/create-exercise.dto';
import { UpdateExerciseDto } from './dtos/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';
import { getManager } from 'typeorm';
import { Workout } from 'src/workouts/entities/workout.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
  ) {}

  async createExercise(
    createExerciseDto: CreateExerciseDto,
  ): Promise<Exercise> {
    const newExercise = this.exercisesRepository.create(createExerciseDto);
    return await this.exercisesRepository.save(newExercise);
  }

  async findExercises(): Promise<Exercise[]> {
    return await this.exercisesRepository.find();
  }

  // async createExercise(
  //   createExerciseDto: CreateExerciseDto,
  //   workoutId: number,
  // ): Promise<Exercise> {
  //   const newExercise = this.exercisesRepository.create(createExerciseDto);
  //   const workoutsRepository = getRepository(Workout);
  //   const workout = await workoutsRepository.findOne(workoutId);
  //   newExercise.workout = workout;
  //   return this.exercisesRepository.save(newExercise);
  // }

  // async findDistinctExercises(): Promise<Exercise[]> {
  //   const distinctExercises = await this.exercisesRepository
  //     .createQueryBuilder('exercise')
  //     .select()
  //     .distinctOn(['name'])
  //     .getMany();
  //   return distinctExercises;
  // }

  async findExercise(id: number): Promise<Exercise> {
    return await this.exercisesRepository.findOne(id);
  }

  async updateExercise(
    id: number,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    await this.exercisesRepository.update(id, updateExerciseDto);
    return await this.findExercise(id);
  }
}
