import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AddExercise } from '../components/AddExercise';
import { Exercise } from '../components/Exercise';
import { ExerciseSelector } from '../components/ExerciseSelector';
import { IExercise } from '../components/Exercise';
import { useGetManyExercisesQuery } from '../redux/endpoints/exercises-endpoints';

const exercises = [
  { id: 1, name: 'Bench Press', sets: [] },
  { id: 2, name: 'Deadlift', sets: [] },
];

export const PlanningPage = () => {
  const { data, error, isLoading } = useGetManyExercisesQuery();
  const exercisesToSelect = (data as unknown as IExercise[]) || [];
  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <Box sx={{ mb: 5, display: 'grid', gap: 2 }}>
        {exercises.map((exercise) => (
          <Exercise key={exercise.id} exercise={exercise} />
        ))}
      </Box>
      <ExerciseSelector exercises={exercisesToSelect} />
      <AddExercise />
    </Container>
  );
};
