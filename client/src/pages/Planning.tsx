import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';
import { Exercise } from '../components/Exercise';
import { ExerciseSelector } from '../components/ExerciseSelector';

const exercises = [
  { id: 1, name: 'Bench Press', sets: [] },
  { id: 2, name: 'Deadlift', sets: [] },
];

export const PlanningPage = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {exercises.map((exercise) => (
          <Grid item>
            <Exercise key={exercise.id} exercise={exercise} />
          </Grid>
        ))}
      </Grid>
      <ExerciseSelector />
    </Container>
  );
};
