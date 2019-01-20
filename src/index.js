import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './pages/app';
import SignUp from './pages/sign-up';
import Login from './pages/login';
import reducers from './redux/reducers/root-reducer';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/info' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
  </Provider>
  , document.querySelector('.container'));
