import React, { useState } from 'react';
import { data } from '../../data';
import { Link } from 'react-router-dom';
//more components
//we can use alternative to prop-drilling like context api,redux (for more complex cases)

const People = (id) => {
    const [people, setPeople] = useState(data);

    return (<div>
        <h1> people page</h1>
        {
            people.map((person)=>{
               return(
                    <div key={person.id} className='border border-danger p-2 my-2 d-flex justify-content-between'>
                        <h4>{person.name}</h4>
                        <Link to={`/Person/${person.id}`}  >Learn more</Link>
                    </div>
               );
            })
        }
    </div>);
};



export default People;