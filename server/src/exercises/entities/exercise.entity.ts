import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Set } from 'src/sets/entities/set.entity';
import { Workout } from 'src/workouts/entities/workout.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Set, (set) => set.exercise, { cascade: true })
  sets: Set[];

  @ManyToOne(() => Workout, (workout) => workout.exercises)
  workout: Workout;
}
