import React, { useState } from 'react';
const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    const complexIncrease = () => {
        console.log('ki');
        setTimeout(() => {
            setValue(value+1);
        }, 1000);
    };

    return (
        <div className="container text-center text-dark my-3">
            <section>
                <h2>Regular Counter</h2>
                <h1 className='my-3'>{value}</h1>
                <div className='p-3'>
                    <button className='btn btn-primary mx-2' onClick={() => setValue(value + 1)}>increase</button>
                    <button className='btn btn-primary mx-2' onClick={() => setValue(0)}>Reset</button>
                    <button className='btn btn-primary mx-2' onClick={() => setValue(value - 1)}>decrease</button>
                </div>
            </section>
            <section>
                <h2>complex Counter</h2>
                <h1 className='my-3'>{value}</h1>
                <div className='p-3'>
                    <button className='btn btn-primary mx-2' onClick={() => complexIncrease()}>complex increase</button>
                </div>
            </section>
        </div>
    )
}
export default UseStateCounter;