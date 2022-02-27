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

interface IProps {
  exercises: IExercise[];
}

export const ExerciseSelector = ({ exercises }: IProps) => {
  const [selectedExercise, setSelectedExercise] = useState('');

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedExercise(e.target.value);
    console.log(selectedExercise);
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
