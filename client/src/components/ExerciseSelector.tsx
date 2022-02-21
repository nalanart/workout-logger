import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

export const ExerciseSelector = () => {
  return (
    <FormControl fullWidth>
      <InputLabel id="exercise-select-label">Select an exercise</InputLabel>
      <Select
        labelId="exercise-select-label"
        id="exercise-select"
        label="Select an exercise"
        onChange={() => console.log('selected')}
      >
        <MenuItem value="Bench Press">Bench Press</MenuItem>
        <MenuItem value="Deadlift">Deadlift</MenuItem>
        <MenuItem value="Squat">Squat</MenuItem>
      </Select>
    </FormControl>
  );
};
