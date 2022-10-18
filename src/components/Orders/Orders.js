import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviwItem from '../ReviweItem/ReviwItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Orders.css'

const Orders = () => {
    const {products, previousCart} =useLoaderData(); //{ products: products, previousCart:previousCart }
    const [cart, setCart] = useState(previousCart);
    // console.log(cart)

    const handlerReviweItem = (id) =>{
        const removeItem = cart.filter(product => product.id !== id);
        setCart(removeItem);
        removeFromDb(id);
    }

    const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviwItem
                    key={product.id}
                    product={product}
                    handlerReviweItem={handlerReviweItem}
                    ></ReviwItem>)
                }
                {
                    cart.length ===0 && <h2>Please reviwe the <Link to={'/'}>Shop items</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart handleClearCart={handleClearCart} cart={cart}>
                    
                </Cart>
            </div>
        </div>
    );
};

export default Orders;