import React from 'react';
import './App.css';
import { Tetris } from './components/tetris/tetris';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Settings } from './components/settings/settings';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/start" component={Tetris} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
