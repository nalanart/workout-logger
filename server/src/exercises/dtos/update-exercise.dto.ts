import { PartialType } from '@nestjs/mapped-types';
import { Set } from 'src/sets/entities/set.entity';
import { CreateExerciseDto } from './create-exercise.dto';

export class UpdateExerciseDto {
  sets: Set[];
}
