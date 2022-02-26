import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateSetDto } from './dtos/update-set.dto';
import { SetsService } from './sets.service';

@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Patch(':id')
  async updateOne(
    @Param() params,
    @Body() updateSetDto: UpdateSetDto,
  ): Promise<any> {
    return this.setsService.updateOneSet(params.id, updateSetDto);
  }
}
