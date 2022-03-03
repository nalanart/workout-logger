import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExerciseDto } from './dtos/create-exercise.dto';
import { UpdateExerciseDto } from './dtos/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';

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
