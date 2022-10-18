import React from 'react';
import './ReviwItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviwItem = ({product, handlerReviweItem}) => {
    const {id,img, name, price, shipping, quantity
    }=product;
    return (
        <div className='reviwe-cart'>
            <img src={img} alt="" />

            <div className='combine-text'>
            <div className='wright-reviwe'>
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div className='reviwe-delete'>
                <button onClick={()=> handlerReviweItem(id)} className='button-delete'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
                </button>
            </div>
            </div>
            

        </div>
    );
};

export default ReviwItem;