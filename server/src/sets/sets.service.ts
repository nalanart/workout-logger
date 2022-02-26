import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateSetDto } from './dtos/update-set.dto';
import { Set } from './entities/set.entity';

@Injectable()
export class SetsService {
  constructor(
    @InjectRepository(Set)
    private setsRepository: Repository<Set>,
  ) {}

  async updateOneSet(id: number, updateSetDto: UpdateSetDto) {
    return await this.setsRepository.update(id, updateSetDto);
  }
}
