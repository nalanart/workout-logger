import { Body, Controller, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateSetDto } from './dtos/create-set.dto';
import { UpdateSetDto } from './dtos/update-set.dto';
import { Set } from './entities/set.entity';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Post()
  create(
    @Body() createSetDto: CreateSetDto,
    @Query('workoutExerciseId') workoutExerciseId: number,
  ): Promise<Set> {
    return this.setsService.createSet(createSetDto, workoutExerciseId);
  }

  @Patch(':id')
  async updateOne(
    @Param() params,
    @Body() updateSetDto: UpdateSetDto,
  ): Promise<Set> {
    return this.setsService.updateSet(params.id, updateSetDto);
  }
}
