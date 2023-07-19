import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function dec(){
    setCount(function(prev){
      return prev - 1;
    });
  }
  function inc(){
    setCount(function(prev){
      return prev + 1;
    });
  }
  return (
    <>
      <div className='d-flex mt-5'>
        <button onClick={dec} className="btn btn-info mx-4 p-3">-</button>
        <h1>{count}</h1>
        <button onClick={inc} className='btn btn-info mx-4 p-3'>+</button>
      </div>
    </>
  );
}

export default App;
