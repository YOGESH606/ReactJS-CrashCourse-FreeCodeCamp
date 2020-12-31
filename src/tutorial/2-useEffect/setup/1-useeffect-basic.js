import React, { useState,useEffect } from 'react';
//by default runs after every re-render
//cleanup function
//second parameter
const UseEffectBasics=()=>{
    const [value,setValue]=useState(0);

     useEffect(() => {
         console.log('call useeffect');  
         if(value>=1){
             document.title=`new message(${value})`;
         }    
     },[]);

   //  console.log('render component');
     return(
         <>
         <h1>{value}</h1>
         <button className="btn btn-primary mt-5" onClick={()=>setValue(value+1)}>
             click me
         </button>
         </>
     )
};

export default UseEffectBasics;