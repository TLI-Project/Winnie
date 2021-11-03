import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.scss';


import Index from './components/Home';
import Login from './components/Login';
import Selection from './components/Selection';
import CreateAccount from './components/CreateAccount';
import Finance from './components/Finance';
import Features from './components/Features';
import FeaturesBreakdown from './components/FeaturesBreakdown';
import Breakdown from './components/Breakdown';
import Cart from './components/Cart';
import Display from './components/Display'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => (<Index />)} />
          <Route exact path='/login' render={() => (<Login />)} />
          <Route exact path='/selection' render={() => (<Selection />)} />
          <Route exact path='/create-account' render={() => (<CreateAccount />)} />
          <Route exact path='/finance' render={() => (<Finance />)} />
          <Route exact path='/features' render={() => (<Features />)} />
          <Route exact path='/features-breakdown' render={() => (<FeaturesBreakdown />)} />
          <Route exact path='/breakdown' render={() => (<Breakdown />)} />
          <Route exact path='/cart' render={() => (<Cart />)} />
          <Route exact path='/display' render={() => (<Display />)} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App