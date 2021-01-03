import React, { useState, useEffect } from 'react';
import {useFetch} from './2-usefetch';
const url ='https://jsonplaceholder.typicode.com/users';
 const Example=()=>{
    const {loading,product}=useFetch(url);
    console.log(product.[0]);
    return (
        <div>
            <h2>{ loading?'loading....':'data' }</h2>
        </div>
    )
};
export default Example;