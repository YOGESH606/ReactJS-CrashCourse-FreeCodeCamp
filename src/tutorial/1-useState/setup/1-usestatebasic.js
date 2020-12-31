import React , {useState} from 'react';

const UseStateBasic=()=>{
    const[title,setText]=useState("Random Title");

    const handleClick=()=>{
        if(title==="Random Title"){
            setText("hello world");
        }
         else{
             setText("Random Title"
             );
            }
    };
    return(
        <React.Fragment>
            <div className='text-center'>
                <h2 className='text-dark'>{title}</h2>
                <button type='submit' className='btn btn-primary mt-5 ' onClick={handleClick}>
                    CHANGE TITLE
            </button>
            </div>
        </React.Fragment>
    );
};  

export default UseStateBasic;  
