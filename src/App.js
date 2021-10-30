import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.css';


import Home from './components/Home';
import Login from './components/Login';
import Selection from './components/Selection';
import CreateAccount from './components/CreateAccount';
import Finance from './components/Finance';
import Features from './components/Features';
import FeaturesBreakdown from './components/FeaturesBreakdown';
import Breakdown from './components/Breakdown';
import Cart from './components/Cart';

class App extends React.Component {
  render() {
    return (
        <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<Home/>)}/>
            <Route exact path='/login' render={() => (<Login/>)}/>
            <Route exact path='/selection' render={() => (<Selection/>)}/>
            <Route exact path='/create-account' render={() => (<CreateAccount/>)}/>
            <Route exact path='/finance' render={() => (<Finance/>)}/>
            <Route exact path='/features' render={() => (<Features/>)}/>
            <Route exact path='/features-breakdown' render={() => (<FeaturesBreakdown/>)}/>
            <Route exact path='/breakdown' render={() => (<Breakdown/>)}/>
            <Route exact path='/cart' render={() => (<Cart/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}


// import {useEffect, useState} from 'react';

// function App() {
//   const baseEndpoint = 'https://sensoeducation.link'
//   const loginEndpoint = '/mockSensoAPI'
//   const [data, setData] = useState('');
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     fetch(`${baseEndpoint}${loginEndpoint}`)
//         .then(res => res.text())
//         .then(
//             (result) => {
//               setIsLoaded(true);
//               setData(result);
//             },
//             // Note: it's important to handle errors here
//             // instead of a catch() block so that we don't swallow
//             // exceptions from actual bugs in components.
//             (error) => {
//               setIsLoaded(true);
//             }
//         )
//   }, [])

//   return (
//     <div className="App">
//       {isLoaded?data:'loading...'}
//     </div>
//   );
// }

export default App;
