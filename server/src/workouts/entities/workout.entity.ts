import { WorkoutExercise } from 'src/workout-exercises/entities/workout-exercise.entity';
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

  @OneToMany(() => WorkoutExercise, (exercise) => exercise.workout)
  exercises: WorkoutExercise[];
}
