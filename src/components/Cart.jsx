import React from 'react';
import { shopStateContext } from '../App';
import { useNavigate } from 'react-router-dom';
import ProductItemOnCart from './ProductItemOnCart';

import '../styles/Cart.css';

const Cart = () => {
	const { cart, products } = React.useContext(shopStateContext);
	const navigate = useNavigate();
	return (
		<div className='cart-container' onClick={(e) => e.stopPropagation()}>
			<div className='cart-header'>Cart</div>
			<div className='cart-item__list'>
				{cart.getAllItems().map(([id, count]) => {
					return <ProductItemOnCart {...products[id]}/>
				})}
			</div>
		</div>
	);
};

export default Cart;
