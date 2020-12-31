import React, { useState, useEffect } from 'react';

const ShowHide=()=>{
    const[show,setShow]=useState(false);

    return(
        <>
          <button className='btn btn-primary btn-sm my-5'
          onClick={ ()=>setShow(!show)}>
              show/hide
          </button>
          {show && <Item/>}
        </>
    )
};
const Item=()=>{
    const[size,setSize]=useState(window.innerWidth);
     const setwidth=()=>{
         setSize(window.innerWidth);
     }
    useEffect(() => {
        //console.log('default add');
        window.addEventListener('resize', setwidth);
        //console.log('add');
        return () => {
            window.removeEventListener('resize', setwidth);
            //console.log('delete');
        }
    })
    return(
        <div> 
            <h1>Window</h1>
            <h2>Size:{size} </h2>
        </div>
    )
}

export default ShowHide;