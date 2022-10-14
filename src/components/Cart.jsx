import React from 'react';
import { shopStateContext } from '../App';
import ProductItemOnCart from './ProductItemOnCart';

import '../styles/Cart.css';

const Cart = () => {
	const { cart, products } = React.useContext(shopStateContext);
	return (
		<div className='cart-container' onClick={(e) => e.stopPropagation()}>
			<div className='cart-header'>Cart</div>
			<div className='cart-item__list'>
				{cart.getAllItems().map((id) => {
					return <ProductItemOnCart {...products.getProduct(id)}/>
				})}
			</div>
			<div className='cart-summary'>

			</div>
		</div>
	);
};

export default Cart;
