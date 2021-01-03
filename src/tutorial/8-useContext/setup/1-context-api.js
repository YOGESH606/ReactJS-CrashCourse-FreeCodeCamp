import React, { useState,useContext } from 'react';
import { data } from '../../data';

const PersonContext=React.createContext();
//personcontext has two componets provider and consumer
//we can access it using personcontext and dot operator

const ContextAPI = (id) => {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => (people.filter((person) => person.id !== id)
         ))
    };
    return(
 //we can access value attribute using useContext hooks
     <PersonContext.Provider value={{removePerson,people}}> 
        <h3 className='text-center'>Context API/useContext</h3>
        <List people={people} />
    </PersonContext.Provider>
    );
};

const List = () => {
    const mainData=useContext(PersonContext);
    return <>
        {
              mainData.people.map((person) => {
             return <SinglePerson key={person.id} {...person}  />
            })
        }
    </>
}

const SinglePerson = ({ id, name }) => {
   const {removePerson}=useContext(PersonContext);//destructuring
    return (
        <div className='border d-flex py-1 m-2 border-danger'>
            <h4 className="text-dark w-100">{id}::{name}</h4>
            <button className='btn btn-primary border' type='submit' onClick={() => removePerson(id)}>
              remove
            </button>
        </div>
    ); 
}
export default ContextAPI; 
