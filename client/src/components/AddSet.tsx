import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Delete, Edit, Save } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {
  useGetWorkoutQuery,
  useUpdateWorkoutMutation,
  Workout,
} from '../redux/endpoints/workouts-endpoints';
import { IExercise } from './Exercise';
import {
  Set,
  useCreateOneSetMutation,
} from '../redux/endpoints/sets.endpoints';
import { WorkoutExercise } from '../redux/endpoints/workout-exercises-endpoints';

interface IProps {
  setNumber: number;
  workout?: Workout;
  exercise?: WorkoutExercise;
}

export const AddSet = ({ setNumber, workout, exercise }: IProps) => {
  const [set, setSet] = useState<Set>({
    weight: 0,
    reps: 0,
  });
  const [updateWorkout, { isLoading }] = useUpdateWorkoutMutation();
  const [createSet, { isLoading: isCreateSetLoading }] =
    useCreateOneSetMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSet({
      ...set,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(exercise?.id);
    createSet({ workoutExerciseId: exercise?.id, body: set });
    setSet({
      weight: 0,
      reps: 0,
    });
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', alignItems: 'center' }}
      onSubmit={handleOnSubmit}
    >
      <Typography component="span" variant="subtitle1">
        Set {setNumber + 1}:
      </Typography>
      <FormControl sx={{ width: '4rem', ml: 1 }}>
        <Input
          id="exercise-reps"
          name="reps"
          endAdornment={<InputAdornment position="end">reps</InputAdornment>}
          value={set.reps ? set.reps : ''}
          onChange={handleChange}
          sx={{ input: { textAlign: 'right' } }}
        />
      </FormControl>
      <Typography component="span" variant="subtitle1" sx={{ mx: 2 }}>
        @
      </Typography>
      <FormControl sx={{ width: '4rem', mr: 2 }}>
        <Input
          id="exercise-weight"
          name="weight"
          endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
          value={set.weight ? set.weight : ''}
          onChange={handleChange}
          sx={{ input: { textAlign: 'right' } }}
        />
      </FormControl>
      <Button type="submit">Save</Button>
    </Box>
  );
};
