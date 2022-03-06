import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AddExercise } from '../components/AddExercise';
import { Exercise } from '../components/Exercise';
import { ExerciseSelector } from '../components/ExerciseSelector';
import { IExercise } from '../components/Exercise';
import { useGetManyExercisesQuery } from '../redux/endpoints/exercises-endpoints';
import {
  useGetWorkoutQuery,
  Workout,
} from '../redux/endpoints/workouts-endpoints';
import { useSearchParams } from 'react-router-dom';

const exercises = [
  { id: 1, name: 'Bench Press', sets: [] },
  { id: 2, name: 'Deadlift', sets: [] },
];

export const PlanningPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let workoutId = searchParams.get('workoutId') as unknown as number;

  const { data: workoutData, isLoading: isGetWorkoutLoading } =
    useGetWorkoutQuery(workoutId);
    console.log(workoutData);
  const {
    data: exercisesData,
    error,
    isLoading: isGetManyExercisesLoading,
  } = useGetManyExercisesQuery();
  const exercisesToSelect = (exercisesData as unknown as IExercise[]) || [];

  if (isGetManyExercisesLoading) return <div>Loading...</div>;

  return (
    <Container sx={{ pt: 2 }}>
      <Box sx={{ mb: 5, display: 'grid', gap: 2 }}>
        {workoutData?.exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            exercise={exercise}
            workout={workoutData}
          />
        ))}
      </Box>
      <ExerciseSelector exercises={exercisesToSelect} workout={workoutData} />
      <AddExercise workout={workoutData} />
    </Container>
  );
};
