import React, { useRef, useEffect } from 'react';
//preserve value
//does not trigger re render
//target dom nodes/elements

const useRefbasics=()=>{
   const refContainer=useRef(null);
   const divContainer=useRef(null);

   const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
   };
    useEffect(() => {
        refContainer.current.focus();
    })
   return(
       <>
           <form className='text-center my-5 py-5 ' style={{height:"500px"}} onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer}/>
                    <button type='click' >submit</button>
                   <div className='m-5 p-5' ref={divContainer}>
                        hello world
                    </div>
                </div>
           </form>
       </>
   );
}

export default useRefbasics;