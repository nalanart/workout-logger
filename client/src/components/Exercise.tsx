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
import { AddSet } from './AddSet';

interface Set {}

export interface IExercise {
  id: number;
  name: string;
  sets: number[];
}

interface IProps {
  exercise: IExercise;
}

export const Exercise = ({ exercise }: IProps) => {
  const { name } = exercise;

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
        <Box>
          <Typography component="div" variant="subtitle1">
            Set 1: 8 reps @ 50 lbs
          </Typography>
        </Box>
        <Box>
          <Typography component="div" variant="subtitle1">
            Set 2: 7 reps @ 50 lbs
          </Typography>
        </Box>
        <AddSet />
      </Box>
    </Box>
  );
};
