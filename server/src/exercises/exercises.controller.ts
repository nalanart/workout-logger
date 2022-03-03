import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
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
  ): Promise<Exercise> {
    return this.exercisesService.createExercise(createExerciseDto);
  }

  @Get()
  async findAll(): Promise<Exercise[]> {
    return this.exercisesService.findExercises();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Exercise> {
    return this.exercisesService.findExercise(id);
  }

  @Patch(':id')
  async updateOne(
    @Param('id') id: number,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    return this.exercisesService.updateExercise(id, updateExerciseDto);
  }
}
