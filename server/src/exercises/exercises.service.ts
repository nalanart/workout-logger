import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExerciseDto } from './dtos/create-exercise.dto';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
  ) {}

  findAllExercises(): Promise<Exercise[]> {
    return this.exercisesRepository.find();
  }

  findOneExercise(id: number): Promise<Exercise> {
    return this.exercisesRepository.findOne(id, { relations: ['sets'] });
  }

  createOneExercise(body: CreateExerciseDto): Promise<Exercise> {
    const newExercise = this.exercisesRepository.create(body);
    return this.exercisesRepository.save(newExercise)
  }
}
