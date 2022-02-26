import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AddExercise } from '../components/AddExercise';
import { Exercise } from '../components/Exercise';
import { ExerciseSelector } from '../components/ExerciseSelector';
import { IExercise } from '../components/Exercise';

const exercises = [
  { id: 1, name: 'Bench Press', sets: [] },
  { id: 2, name: 'Deadlift', sets: [] },
];

export const PlanningPage = () => {
  const [exercisesAvailable, setExercisesAvailable] = useState<IExercise[]>([]);

  useEffect(() => {
    const getExercises = async () => {
      const res = await axios.get('/exercises');
      setExercisesAvailable(res.data);
    };

    getExercises();
  }, []);

  return (
    <Container>
      <Grid container spacing={2} sx={{ mb: 5, gap: 2 }}>
        {exercises.map((exercise) => (
          <Grid item key={exercise.id}>
            <Exercise exercise={exercise} />
          </Grid>
        ))}
      </Grid>
      <ExerciseSelector exercises={exercisesAvailable} />
      <AddExercise />
    </Container>
  );
};
