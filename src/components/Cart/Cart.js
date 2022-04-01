import React from 'react';
import './Cart.css';

const Cart = ({cart,handeleRemoveFromCart}) => {
    
    return (
        <div>
            <h3> Selected items: {cart.length} </h3>
            {
                cart.map(tShirt =><p>
                    { tShirt.name }
                    <button onClick={()=>handeleRemoveFromCart(tShirt)}> X </button>
                </p>)
            }
        </div>
    );
};

export default Cart;