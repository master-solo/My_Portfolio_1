import { useState } from 'react';
import './App.css';
import Mp from './Mp';
import Loading from './components/Loading/Loading';


function App() {
  const [ loading, setLoading ] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 3000)

  return (
    <div>
      {
        loading? <Loading /> : <Mp />
      }
    </div>
  );
}

export default App;
