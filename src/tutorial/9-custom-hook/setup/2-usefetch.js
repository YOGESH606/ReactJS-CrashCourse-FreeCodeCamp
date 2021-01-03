import React, { useState, useEffect } from 'react';

export const useFetch=(url)=>{
    const [loading,setloading]=useState(true);
    const [product,setProduct]=useState([]);

const getProduct=async()=>{
    const responce=await fetch(url);
    const product=await responce.json();
    setProduct(product);
    setloading(false);
};

   useEffect(() => {
       getProduct();
   },[url]);

   return {loading,product};
};