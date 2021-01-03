import React, { useState } from 'react';
import { data } from '../../data';

//more components
//we can use alternative to prop-drilling like context api,redux (for more complex cases)

const PropDrilling = (id) => {
    const [people, setPeople] = useState(data); 

    const removePerson=(id)=>{
        setPeople((people)=>(people.filter((person)=>person.id!==id)
        ))
    };

    return <section>
        <h3>prop drilling</h3>
        <List people={people} removePerson={removePerson}/>
    </section>;
};


const List = ({people,removePerson}) => {
    return <>
        {
            people.map((person) => {
                return <SinglePerson key={person.id} {...person} removePerson={removePerson} />
            })
        }
    </>
}
const SinglePerson = ({ id, name,removePerson }) => {
    return (
        <div className='border d-flex p-3 border-danger'>
            <h4 className="text-dark w-100">{id}::{name}</h4>
            <button className='btn btn-primary border' type='submit' onClick={()=>removePerson(id)}>
                remove
            </button>
        </div>
    )
}
export default PropDrilling;