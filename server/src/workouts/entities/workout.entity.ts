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

  @Column('jsonb', { array: false, default: [], nullable: true })
  exercises: WorkoutExercise[];
  // @OneToMany(() => WorkoutExercise, (exercise) => exercise.workout, {
  //   onUpdate: 'CASCADE',
  // })
  // exercises: WorkoutExercise[];
}
