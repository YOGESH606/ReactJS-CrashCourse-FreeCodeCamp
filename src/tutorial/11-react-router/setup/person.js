import React, { useState, useEffect } from 'react';

import { data } from '../../data';
import { Link,useParams } from 'react-router-dom';

const Person=()=>{
   // console.log(useParams());
    const [name,setName]=useState('default name');
    const {id}=useParams();
    //useparam returns an object of the params for the route rendered.
useEffect(() => {
    const newPerson=data.find((person)=>person.id===parseInt(id));
    console.log(newPerson);
    setName(newPerson.name);
}, [])

    return(
        <div>
            <h2>{name}</h2>
            <Link to='/people' className='btn btn-primary'>
                back to people
            </Link>
        </div>
    );
};
export default Person;