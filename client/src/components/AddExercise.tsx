import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

export const AddExercise = () => {
  const [exerciseToAdd, setExerciseToAdd] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExerciseToAdd(e.target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post('/exercises', { name: exerciseToAdd });
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
      />
      <Button type="submit">ADD</Button>
    </Box>
  );
};
