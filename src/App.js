import { useEffect } from 'react';

function App() {
  const baseEndpoint = 'http://piglet-env.eba-u7t4ntpp.us-east-2.elasticbeanstalk.com'
  const loginEndpoint = '/login'
  useEffect(() => {
    fetch(`${baseEndpoint}${loginEndpoint}`)
      .then(res => res.json())
      .then(console.log)
      .catch(error => alert('Error! ' + error.message))
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
