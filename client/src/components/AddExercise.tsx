import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useCreateOneExerciseMutation } from '../redux/endpoints/exercises-endpoints';
import { useCreateOneWorkoutExerciseMutation } from '../redux/endpoints/workout-exercises-endpoints';
import {
  useUpdateWorkoutMutation,
  Workout,
} from '../redux/endpoints/workouts-endpoints';

interface IProps {
  workout?: Workout;
}

export const AddExercise = ({ workout }: IProps) => {
  const [createExercise, { isLoading: isCreatingExercise }] =
    useCreateOneExerciseMutation();
  const [createWorkoutExercise, { isLoading: isCreatingWorkoutExercise }] = useCreateOneWorkoutExerciseMutation();
  const [exerciseToAdd, setExerciseToAdd] = useState('');
  const [updateWorkout, { isLoading: isUpdateWorkoutLoading }] =
    useUpdateWorkoutMutation();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExerciseToAdd(e.target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExercise = await createExercise({ name: exerciseToAdd }).unwrap();
    const newWorkoutExercise = await createWorkoutExercise({ workoutId: workout?.id, body: {name: exerciseToAdd} }).unwrap();
    setExerciseToAdd('');
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', alignItems: 'end' }}
      onSubmit={handleOnSubmit}
    >
      <TextField
        id="add-exercise"
        label="Add exercise"
        variant="standard"
        value={exerciseToAdd}
        onChange={handleOnChange}
        fullWidth
      />
      <Button type="submit">ADD</Button>
    </Box>
  );
};
