import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography component="div" variant="h5">
          Workout Logger
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
