import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.scss';


import Home from './components/Home';
import Login from './components/Login';
import Catalogue from './components/Catalogue';
import SignUp from './components/SignUp';
import Finance from './components/Finance';
import Details from './components/Details';
import Compare from './components/Compare';

const App = () => {
  return (
    <div id='app'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => (<Home />)} />
          <Route exact path='/login' render={() => (<Login />)} />
          <Route exact path='/catalogue' render={() => (<Catalogue />)} />
          <Route exact path='/signup' render={() => (<SignUp />)} />
          <Route exact path='/finance' render={() => (<Finance />)} />
          <Route exact path='/details' render={() => (<Details />)} />
          <Route exact path='/compare' render={() => (<Compare />)} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App