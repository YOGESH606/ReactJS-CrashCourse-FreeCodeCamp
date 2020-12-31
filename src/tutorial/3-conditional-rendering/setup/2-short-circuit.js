import React, {useState,useEffect} from 'react';
const ShortCircuit=()=>{
    const [text,setText]=useState('');
    const [isError,setError]=useState(false);
    // const firstValue=text||'hello world';
    // const secondValue=text&&'hello world';

    return(
        <>
           {/* <h1>{firstValue}</h1>
           <h1>value:{secondValue}</h1> */}
           <h1>{text || 'john doe'}</h1>
           <button onClick={()=>{
               setError(!isError)
           }} className='btn btn-primary my-3 btn-sm'>
               toggle error
           </button>
           {isError && <h1>Error...</h1>}
           
           {isError ? (<p>there is an error...</p>)
           :(
               <div>
                   <h2>there is no error</h2>
               </div>
           )}
        </>
    );
}

export default ShortCircuit;