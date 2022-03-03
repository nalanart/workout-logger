import { Exercise } from 'src/exercises/entities/exercise.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  // @Column('jsonb', { array: false, default: [], nullable: true })
  // exercises: WorkoutExercise[];
  @OneToMany(() => Exercise, (exercise) => exercise.workout, {
    onUpdate: 'CASCADE',
  })
  exercises: Exercise[];
}
