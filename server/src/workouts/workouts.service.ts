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

  create(): Promise<Workout> {
    const newWorkout = this.workoutsRepository.create({ exercises: [] });
    return this.workoutsRepository.save(newWorkout);
  }

  findAll() {
    return `This action returns all workouts`;
  }

  findOne(id: number): Promise<Workout> {
    return this.workoutsRepository.findOne(id, { relations: ['exercises', 'exercises.sets']});
  }

  async update(
    id: number,
    updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    await this.workoutsRepository.update(id, updateWorkoutDto);
    return await this.findOne(id);
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
