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

  async createSet(): Promise<Set> {
    const newSet = this.setsRepository.create({ reps: null, weight: null });
    return await this.setsRepository.save(newSet);
  }

  async updateSet(id: number, updateSetDto: UpdateSetDto): Promise<Set> {
    await this.setsRepository.update(id, updateSetDto);
    return await this.setsRepository.findOne(id);
  }
}
