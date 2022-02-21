import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavBar } from './components/NavBar';
import { PlanningPage } from './pages/Planning';

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Button variant="outlined" sx={{ mt: 5, mx: 'auto', display: 'block' }}>
          Create a workout
        </Button>
      </Container>
      <PlanningPage />
    </>
  );
};

export default App;
