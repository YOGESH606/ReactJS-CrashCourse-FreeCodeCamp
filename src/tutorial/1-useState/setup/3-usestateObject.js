import React, { useState } from 'react';
import { data } from '../../data';
//import '../../../App.css';

const UseStateObject = () => {
  const [person, setPerson] = useState(
    {
      name: 'peter',
      age: 24,
      message: 'random message'
    }
  );
  const changeMessage = () => {
      setName('rahesg');
  }
  const [name, setName] = useState('peter jadhav');
  const [age, setAge] = useState(324);
  const [message, setMessage] = useState(' message');
  return (
    <div className='text-dark'>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      < button type='submit' className='btn btn-danger' onClick={changeMessage}>
        change message </button>
    </div>
  )
}

export default UseStateObject;  
