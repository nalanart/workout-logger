import { WorkoutExercise } from 'src/workout-exercises/entities/workout-exercise.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Set {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reps: number;

  @Column()
  weight: number;

  @ManyToOne(() => WorkoutExercise, (exercise) => exercise.sets, {
    onDelete: 'CASCADE',
  })
  exercise: WorkoutExercise;
}
