import React, { useState, useEffect } from 'react';
import Modal from './modal';
import {data} from '../../../data';
//reducer function

const Index=()=>{
    const[name,setName]=useState('');
  const [people,setPeople]=useState(data);
  const[showModal,setShowModal]=useState(false);

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(name){
          setShowModal(true);
          setPeople([...people,{id:new Date().getTime().toString(),name:name}]);
          setName('');
        }
        else{
            setShowModal(true);
        }
  };
    
  return(
      <>
        <div className='text-center'>
              {showModal && <Modal />}
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
                  people.map((person) => {
                      return (
                          <div key={person.id} className='mt-3 py-2 text-center text-dark bg-warning'>
                              <h4>{person.name}</h4>
                          </div>
                  )
                  })
              }
        </div>
      </>
  );
};

export default Index;