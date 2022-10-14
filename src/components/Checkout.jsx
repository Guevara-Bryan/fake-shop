import React from 'react';
import { shopStateContext } from '../App';
import ProductItemOnCheckout from './ProductItemOnCheckout';

import '../styles/Checkout.css';

const Checkout = () => {
	const { cart, products } = React.useContext(shopStateContext);
	return (
		<div className='checkout-container' onClick={(e) => e.stopPropagation()}>
			<div className='checkout-header'>Check Out</div>
			<div className='checkout-item__list'>
				{cart.getAllItems().map((id) => {
					return <ProductItemOnCheckout key={id} {...products.getProduct(id)} />;
				})}
			</div>
			<div className='checkout-summary'></div>
		</div>
	);
};

export default Checkout;
