import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios";

function App() {

  const [state, setState] = useState('');

  const handleChange = async () => {
    try {
      const res = await axios.get('http://13.200.189.76:5001/api/hello')
      setState(res.data.msg)
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <button onClick={handleChange}>click me</button>
      <p>{state}</p>
    </div>
  );
}

export default App;
