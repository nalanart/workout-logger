import React, { useState } from 'react';
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

interface IProps {
  exercises: IExercise[];
}

export const ExerciseSelector = ({ exercises }: IProps) => {
  const [selectedExercise, setSelectedExercise] = useState('');

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedExercise(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="exercise-select-label">Select an exercise</InputLabel>
      <Select
        labelId="exercise-select-label"
        id="exercise-select"
        label="Select an exercise"
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
