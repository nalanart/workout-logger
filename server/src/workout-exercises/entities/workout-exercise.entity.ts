import { Exercise } from 'src/exercises/entities/exercise.entity';
import { Set } from 'src/sets/entities/set.entity';
import { Workout } from 'src/workouts/entities/workout.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class WorkoutExercise extends Exercise {
  @ManyToOne(() => Workout, (workout) => workout.exercises)
  workout: Workout;

  @OneToMany(() => Set, (set) => set.exercise)
  sets: Set[];
}
