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

function App() {
  return (
    <Router>
      <>
        <MainNavBar />
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
