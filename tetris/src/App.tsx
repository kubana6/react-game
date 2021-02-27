import React from 'react';
import './App.css';
import { Tetris } from './components/tetris/tetris';

const App: React.FC = () => {
  return (
    <div className="App">
      <Tetris />
    </div>
  );
};

export default App;
