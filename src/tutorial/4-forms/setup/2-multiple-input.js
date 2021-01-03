import React, { useState, useEffect } from 'react';

const ControlInput = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    const [person,setPerson]=useState({name:'',email:'',age:''});
    const [people, setPeople] = useState([]);
  
const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setPerson({...person,[name]:value});
    console.log(person);
};
const handleSubmit=(e)=>{
    e.preventDefault();
    if(person.name && person.email && person.age){
       
       const newperson={...person};
       setPeople([...people,newperson]);
       setPerson({name:'',email:'',age:''});
    }  
}
 
    return (
        <>
            <article>
                <form className='form-group text-center' >
                    <div className='mt-3'>
                        <label htmlFor='firstname'>Name:</label>
                        <input className='form-control border border-danger' type='text' id='name' name='name' value={person.name}
                            onChange={handleChange} />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor='email'>Email:</label>
                        <input className='form-control border border-danger' type='email' id='email' name='email' value={person.email}
                            onChange={handleChange}  />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor='age'>Age:</label>
                        <input className='form-control border border-danger' type='age' id='age' name='age' value={person.age}
                            onChange={handleChange} />
                    </div>
                    <button className='btn btn-dark text-light btn-lg my-3
                    ' onClick={handleSubmit}>
                        add person
                    </button>
                </form>
            </article>
            {
                people.map((person, index) => {
                    const { name, email,age } = person;
                    return (
                        <div className='text-dark d-flex justify-content-between text-center border border-success p-2 my-2' key={index}>
                            <h4>{name}</h4>
                            <h4>{email}</h4>
                            <h4>{age}</h4>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ControlInput;