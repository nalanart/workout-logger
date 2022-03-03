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
import React from 'react';
import { Workout } from '../redux/endpoints/workouts-endpoints';
import { AddSet } from './AddSet';

interface ISet {
  weight: number;
  reps: number;
}

export interface IExercise {
  id: number;
  name: string;
  sets: ISet[];
}

interface IProps {
  exercise: IExercise;
  workout?: Workout;
}

export const Exercise = ({ exercise, workout }: IProps) => {
  const { name, sets } = exercise;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="span" variant="h6">
          {name}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Edit />
          <Delete />
        </Box>
      </Box>
      <Box sx={{ ml: 2 }}>
        {sets.map((set, index) => {
          const { weight, reps } = set;
          return (
            <Box>
              <Typography component="div" variant="subtitle1">
                Set {index + 1}: {reps} reps @ {weight} lbs
              </Typography>
            </Box>
          );
        })}
        <AddSet setNumber={sets.length} workout={workout} exercise={exercise} />
      </Box>
    </Box>
  );
};
