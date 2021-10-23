import {useEffect, useState} from 'react';

function App() {
  const baseEndpoint = 'https://sensoeducation.link'
  const loginEndpoint = '/mockSensoAPI'
  const [data, setData] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`${baseEndpoint}${loginEndpoint}`)
        .then(res => res.text())
        .then(
            (result) => {
              setIsLoaded(true);
              setData(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
            }
        )
  }, [])

  return (
    <div className="App">
      {isLoaded?data:'loading...'}
    </div>
  );
}

export default App;
