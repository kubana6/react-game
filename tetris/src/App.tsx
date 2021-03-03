import React from 'react';
import './App.css';
import { Tetris } from './components/tetris/tetris';
import { Header } from './components/header/header';
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Tetris />
    </div>
  );
};
export default App;
