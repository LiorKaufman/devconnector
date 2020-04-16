import React from 'react';

// Components
import MainNavBar from './components/MainNavBar';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// React router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// CSS
import './App.css';

// navBar box Pusher style
const boxStyle = {
  width: '100%',
  height: '83px',
  margin: '0',
  padding: '0',
  border: '0',
};

function App() {
  return (
    <Router>
      <>
        <MainNavBar />
        <div style={boxStyle}></div>
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
