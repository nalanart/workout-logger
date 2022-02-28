import React from 'react';
import { Delete, Edit, Save } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

interface IProps {
  setNumber: number;
}

export const AddSet = ({ setNumber }: IProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography component="span" variant="subtitle1">
        Set {setNumber + 1}:
      </Typography>
      <FormControl sx={{ width: '4rem', ml: 1 }}>
        <Input
          id="exercise-reps"
          endAdornment={<InputAdornment position="end">reps</InputAdornment>}
          sx={{ input: { textAlign: 'right' } }}
        />
      </FormControl>
      <Typography component="span" variant="subtitle1" sx={{ mx: 2 }}>
        @
      </Typography>
      <FormControl sx={{ width: '4rem', mr: 2 }}>
        <Input
          id="exercise-weight"
          endAdornment={<InputAdornment position="end">lbs</InputAdornment>}
          sx={{ input: { textAlign: 'right' } }}
        />
      </FormControl>
      <Button>Save</Button>
    </Box>
  );
};
