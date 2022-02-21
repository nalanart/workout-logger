import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateExerciseDto } from './dtos/create-exercise.dto';
import { UpdateExerciseDto } from './dtos/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
  ) {}

  async createOneExercise(
    createExerciseDto: CreateExerciseDto,
  ): Promise<Exercise> {
    const newExercise = this.exercisesRepository.create(createExerciseDto);
    return this.exercisesRepository.save(newExercise);
  }

  async findAllExercises(): Promise<Exercise[]> {
    return await this.exercisesRepository.find({ relations: ['sets'] });
  }

  async findOneExercise(id: number): Promise<Exercise> {
    return await this.exercisesRepository.findOne(id, { relations: ['sets'] });
  }
}
