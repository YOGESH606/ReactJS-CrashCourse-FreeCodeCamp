import React, { useState, useEffect } from 'react';

const ControlInput=()=>{
    const[name,setName]=useState('h');
    const[email,setEmail]=useState('g');
    const[people,setPeople]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name&&email){
            const person={name:name,email:email};
            setPeople((people)=>([...people,person]));
            setName('');
            setEmail('');
        } 
        else{
            console.log('empty value')
        }  
    }

    return(
        <>
            <article>
                <form className='form-group text-center' onSubmit={handleSubmit}>
                    <div className='mt-3'>
                        <label htmlFor='firstname'>Name:</label>
                        <input className='form-control border border-danger' type='text' id='firstname' name='firstname' value={name}
                         onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor='email'>Email:</label>
                        <input className='form-control border border-danger' type='email' id='email' name='email' value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button className='btn btn-dark text-light btn-lg my-3 '>
                        add person
                    </button>
                </form>
            </article>
            {
                people.map((person,index)=>{
                    const{name,email}=person
                    return(
                        <div className='text-dark d-flex justify-content-between text-center border border-success p-2 my-2' key={index}> 
                            <h4>{name}</h4>
                            <h4>{email}</h4>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ControlInput;