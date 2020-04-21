import React, { useEffect } from 'react';

// Components
import MainNavBar from './components/MainNavBar';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
// React router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

//Helpers
import setAuthToken from './helpers/setAuthToken';

// CSS
import './css/App.css';
import './css/Dashboard.css';

// navBar box Pusher style
const boxStyle = {
  width: '100%',
  height: '83px',
  margin: '0',
  padding: '0',
  border: '0',
};

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <MainNavBar />
          <div style={boxStyle}></div>
          <div className='absolute-center'>
            <Alert />
          </div>
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/create-profile'
              component={CreateProfile}
            />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
