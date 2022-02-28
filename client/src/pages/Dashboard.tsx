import React from 'react';
import { Button, Container } from '@mui/material';
import { useCreateWorkoutMutation } from '../redux/endpoints/workouts-endpoints';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [createWorkout, isLoading] = useCreateWorkoutMutation();
  let navigate = useNavigate();

  const handleCreateWorkout = async () => {
    const workout = await createWorkout({ exercises: [] }).unwrap();
    if (workout) navigate(`/planning?workoutId=${workout.id}`);
  };

  return (
    <Container>
      <Button
        variant="outlined"
        sx={{ mt: 5, mx: 'auto', display: 'block' }}
        onClick={handleCreateWorkout}
      >
        Create a workout
      </Button>
    </Container>
  );
};
