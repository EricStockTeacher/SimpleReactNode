import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  let [message, setMessage] = useState("Hello Everyone");

  useEffect( () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("/api/message", requestOptions)
      .then((response) => response.text())
      .then((result) => setMessage(result))
      .catch((error) => console.error(error));
  }, [])


  return (
   <h2>{message}</h2>
  );
}

export default App;
