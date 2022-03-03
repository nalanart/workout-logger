import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkoutExercise } from 'src/workout-exercises/entities/workout-exercise.entity';
import { getRepository, Repository } from 'typeorm';
import { CreateSetDto } from './dtos/create-set.dto';
import { UpdateSetDto } from './dtos/update-set.dto';
import { Set } from './entities/set.entity';

@Injectable()
export class SetsService {
  constructor(
    @InjectRepository(Set)
    private setsRepository: Repository<Set>,
  ) {}

  async createSet(
    createSetDto: CreateSetDto,
    workoutExerciseId: number,
  ): Promise<Set> {
    const newSet = this.setsRepository.create(createSetDto);
    const workoutExercisesRepository = getRepository(WorkoutExercise);
    const workoutExercise = await workoutExercisesRepository.findOne(
      workoutExerciseId,
    );
    newSet.exercise = workoutExercise;
    return await this.setsRepository.save(newSet);
  }

  async updateSet(id: number, updateSetDto: UpdateSetDto): Promise<Set> {
    await this.setsRepository.update(id, updateSetDto);
    return await this.setsRepository.findOne(id);
  }
}
