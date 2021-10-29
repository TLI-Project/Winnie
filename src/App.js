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

class App extends React.Component {
  render() {
    return (
        <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<Home/>)}/>
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
