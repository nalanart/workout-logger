import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Dashboard } from './pages/Dashboard';
import { PlanningPage } from './pages/Planning';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/planning" element={<PlanningPage />} />
      </Routes>
    </>
  );
};

export default App;
