import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Set } from './entities/set.entity';
import { SetsController } from './sets.controller';
import { SetsService } from './sets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Set])],
  providers: [SetsService],
  controllers: [SetsController],
})
export class SetsModule {}
