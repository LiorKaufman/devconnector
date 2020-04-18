import React from 'react';

// Components
import MainNavBar from './components/MainNavBar';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

// React router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

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
    <Provider store={store}>
      <Router>
        <>
          <MainNavBar />
          <div style={boxStyle}></div>
          <div className='container'>
            <Alert />
            <Route exact path='/' component={Landing} />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
