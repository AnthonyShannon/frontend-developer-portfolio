import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;