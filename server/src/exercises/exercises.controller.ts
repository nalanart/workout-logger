import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateExerciseDto } from './dtos/create-exercise.dto';
import { UpdateExerciseDto } from './dtos/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post()
  async createOne(
    @Body() createExerciseDto: CreateExerciseDto,
    @Query('workoutId') workoutId: number,
  ): Promise<Exercise> {
    return this.exercisesService.createExercise(createExerciseDto, workoutId);
  }

  @Get()
  async findDistinct(): Promise<Exercise[]> {
    return this.exercisesService.findDistinctExercises();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Exercise> {
    return this.exercisesService.findOneExercise(params.id);
  }

  @Patch(':id')
  async updateOne(
    @Param() params,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    return this.exercisesService.updateOneExercise(
      params.id,
      updateExerciseDto,
    );
  }
}
