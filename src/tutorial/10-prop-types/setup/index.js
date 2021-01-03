 import React from 'react';
 import Product from './product';
 import {useFetch} from '../../9-custom-hook/setup/2-usefetch';
const url ='https://jsonplaceholder.typicode.com/users';
const Index=()=>{
   const { product }=useFetch(url);
    return(
        <div>
            <h2>products</h2>
            <section> 
                {
                 product.map((product)=>{
                     return <Product key={product.id} {...product}/>

                 })
                }
            </section>
        </div>
    );
};
export default Index;