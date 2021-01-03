import React, { useState, useEffect,useReducer } from 'react';
import Modal from './modal';
import { data } from '../../../data';
//reducer function
import {reducer} from './reducer';


const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:'' 
}
const Index = () => {
    const [name, setName] = useState('');

    const [state,dispatch]=useReducer(reducer,defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newitem={id: new Date().getTime().toString(),name}
            dispatch({type:'add-item',payload:newitem})  
            setName(''); 
        }
        else {
           dispatch({type:'no-value'});
        }
    };

    const closeModal=()=>{
        dispatch({type:'close-modal'})
    };

    return (
        <>
            <div className='text-center'>
                {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
                <form onSubmit={handleSubmit}>
                    <div >
                        <input
                            className="form-group"
                            type='text'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <button type='submit' className='btn btn-dark text-light my-3'>
                        add
                     </button>
                </form>
                {
                    state.people.map((person) => {
                        return (
                            <div key={person.id} className=' mt-3 py-2 text-light bg-danger d-flex justify-content-around' style={{borderRadius:"20px"}}>
                                <h4>{person.name}</h4>
                                <button onClick={() => dispatch({ type: 'remove-item', payload: person.id })} style={{ borderRadius: "10px" }} className='border-5'>
                                        remove
                                </button>
                            </div>  
                        )
                    })
                }
            </div>
        </>
    );
};

export default Index;