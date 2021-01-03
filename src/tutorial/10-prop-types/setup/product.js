import React from 'react';
import  PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const Product=({name,phone,email})=>{
    return(
        <article>
            <h4>{name}</h4>
            <h4>{phone}</h4>
        </article>
    );
};

Product.prototype={
    name:propTypes.name,
    phone:propTypes.number
}

export default Product;