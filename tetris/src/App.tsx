import React, { useEffect } from 'react';
import './App.css';
import { Tetris } from './components/tetris/tetris';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Settings } from './components/settings/settings';
import { Footer } from './components/footer/footer';
import { SignIn } from './components/loginForm/loginForm';
import { SignUp } from './components/formRegistration/reistration';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './redux/action/actionAuth';
import { AllScore } from './components/score/allScore/allScore';

const App: React.FC = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      {!isAuth ? (
        <Switch>
          <Route path="/registration" component={SignUp} />
          <Route path="/login" component={SignIn} />
          <Redirect to="/login" />
        </Switch>
      ) : (
        <div className="App">
          <Redirect to="/" />
          <Header />
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/start" component={Tetris} />
            <Route path="/allscore" component={AllScore} />
            <Route path="/settings" component={Settings} />
          </Switch>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
};
export default App;
