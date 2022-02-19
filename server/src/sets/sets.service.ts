import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Set } from './entities/set.entity';

@Injectable()
export class SetsService {
  constructor(
    @InjectRepository(Set)
    private setsRepository: Repository<Set>,
  ) {}
}
