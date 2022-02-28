import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Workout } from './entities/workout.entity';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(Workout)
    private workoutsRepository: Repository<Workout>,
  ) {}

  create(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const newWorkout = this.workoutsRepository.create(createWorkoutDto);
    return this.workoutsRepository.save(newWorkout);
  }

  findAll() {
    return `This action returns all workouts`;
  }

  findOne(id: number): Promise<Workout> {
    return this.workoutsRepository.findOne(id);
  }

  async update(
    id: number,
    updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    const workoutToUpdate = await this.findOne(id);
    if (workoutToUpdate) {
      workoutToUpdate.exercises = updateWorkoutDto.exercises;
      return this.workoutsRepository.save(workoutToUpdate);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
