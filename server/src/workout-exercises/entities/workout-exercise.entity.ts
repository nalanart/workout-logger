import { Exercise } from 'src/exercises/entities/exercise.entity';
import { Set } from 'src/sets/entities/set.entity';
import { Workout } from 'src/workouts/entities/workout.entity';
import { Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class WorkoutExercise extends Exercise {
  // @Column('jsonb', { array: false, default: [], nullable: true })
  // sets: Set[];

  @OneToMany(() => Set, (set) => set.exercise)
  sets: Set[];

  @ManyToOne(() => Workout, (workout) => workout.exercises)
  workout: Workout;
}
