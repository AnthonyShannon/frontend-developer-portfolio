import React from 'react';
import './App.scss';
import Title from './components/Title/Title'
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Container maxWidth='xl'>
        <Intro />
      </Container>
    </div>
  );
}

export default App;
