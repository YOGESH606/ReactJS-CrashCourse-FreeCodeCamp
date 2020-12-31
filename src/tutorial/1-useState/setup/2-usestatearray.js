import React, { useState } from 'react';
import { data } from '../../data';
import '../../../App.css';


const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const [name, setName] = useState('');


    const removeItem = (id) => {
        const newnode = people.filter((people) => {
            if (people.id !== id)
                return people;
        });
        setPeople(newnode);
    };

    const addItem = () => {
        let id = people.length + 1;
        const newnode = [...people, { id, name }]
        setPeople(newnode);
        setName('');

    };

    return (
        <React.Fragment>
            {
                people.map((people) => {
                    return (
                        <div key={people.id} className='border1 p-2 text-dark d-flex justify-content-between mt-3' >
                            {people.name}
                            < button type='submit' className='btn btn-danger' onClick={() => removeItem(people.id)}>
                                X
                            </button>
                        </div>
                    );
                }
                )
            }
            <div className='border border-danger d-flex justify-content-between mt-3 p-2 '>
                <input type='text' className='border border-dark w-100' value={name} onChange={(e) => setName(e.target.value)} />
                < button type='submit' className='btn btn-success ml-3 d-block' onClick={addItem}>
                    +</button>
            </div>
            <button type='submit' className='btn btn-primary m-3 d-block' onClick={() => setPeople([])}>
                DELETE CONTENT
            </button>
        </React.Fragment>
    );
};

export default UseStateArray;  
