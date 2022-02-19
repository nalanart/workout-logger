import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateExerciseDto } from './dtos/create-exercise.dto';
import { Exercise } from './entities/exercise.entity';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  findAll(): Promise<Exercise[]> {
    return this.exercisesService.findAllExercises();
  }

  @Get(':id')
  findOne(@Param() params): Promise<Exercise> {
    return this.exercisesService.findOneExercise(params.id);
  }

  @Post()
  async createOne(@Body() createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    return this.exercisesService.createOneExercise(createExerciseDto);
  }
}
