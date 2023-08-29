import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth='xl'>
        <Intro />
      </Container>
    </div>
  );
}

export default App;
