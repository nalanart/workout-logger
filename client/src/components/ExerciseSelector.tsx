import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { IExercise } from './Exercise';
import {
  useUpdateWorkoutMutation,
  Workout,
} from '../redux/endpoints/workouts-endpoints';

interface IProps {
  exercises: IExercise[];
  workout?: Workout;
}

export const ExerciseSelector = ({ exercises, workout }: IProps) => {
  const [selectedExercise, setSelectedExercise] = useState('');
  const [updateWorkout, { isLoading: isUpdateWorkoutLoading }] =
    useUpdateWorkoutMutation();

  const handleChange = async (e: SelectChangeEvent) => {
    if (workout) {
      const updated = await updateWorkout({
        ...workout,
        exercises: [
          ...workout.exercises,
          { id: 1, name: e.target.value, sets: [] },
        ],
      });
      console.log(updated);
    }
    setSelectedExercise('');
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="exercise-select-label">Select an exercise</InputLabel>
      <Select
        labelId="exercise-select-label"
        id="exercise-select"
        label="Select an exercise"
        value={selectedExercise}
        onChange={handleChange}
      >
        {exercises.map((exercise) => {
          const { id, name } = exercise;
          return (
            <MenuItem key={id} value={name}>
              {name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
