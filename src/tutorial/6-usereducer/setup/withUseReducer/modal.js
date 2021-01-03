import React, { useState, useEffect } from 'react';

const Modal = ({modalContent,closeModal}) => {
     
    useEffect(() => {
        setTimeout(()=>
        {
            closeModal();
        },3000);

    });


    return (
        <h4>{modalContent}</h4>
    );
};

export default Modal;