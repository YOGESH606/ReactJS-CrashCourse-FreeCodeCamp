import React, { useState, useEffect } from 'react';

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);      
    };

    useEffect(() => {
        console.log('useeffect');
        window.addEventListener('resize', checkSize);
        
        return()=>{
            console.log('cleanup');
            window.removeEventListener('resize',checkSize);
        }
    });
    console.log('render');
    return (
        <>
            <div className="text-dark text-center">
                <h1>window</h1>
                <h2>{size}</h2>
            </div>
        </>
    ) 

};

export default UseEffectCleanup;