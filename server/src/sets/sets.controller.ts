import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { UpdateSetDto } from './dtos/update-set.dto';
import { Set } from './entities/set.entity';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Post()
  create(): Promise<Set> {
    return this.setsService.createSet();
  }

  @Patch(':id')
  async updateOne(
    @Param() params,
    @Body() updateSetDto: UpdateSetDto,
  ): Promise<Set> {
    return this.setsService.updateSet(params.id, updateSetDto);
  }
}
