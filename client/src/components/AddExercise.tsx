import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useCreateOneExerciseMutation } from '../redux/endpoints/exercises-endpoints';

export const AddExercise = () => {
  const [createExercise, { isLoading: isCreatingExercise }] =
    useCreateOneExerciseMutation();
  const [exerciseToAdd, setExerciseToAdd] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExerciseToAdd(e.target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createExercise({ name: exerciseToAdd });
    setExerciseToAdd('');
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', alignItems: 'end' }}
      onSubmit={handleOnSubmit}
    >
      <TextField
        id="add-exercise"
        label="Add exercise"
        variant="standard"
        value={exerciseToAdd}
        onChange={handleOnChange}
        fullWidth
      />
      <Button type="submit">ADD</Button>
    </Box>
  );
};
