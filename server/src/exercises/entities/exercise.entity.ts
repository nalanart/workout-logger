import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Set } from "src/sets/entities/set.entity";

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Set, set => set.exercise)
  sets: Set[];
}