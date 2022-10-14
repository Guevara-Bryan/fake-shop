import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Cart.css';
import { shopStateContext } from '../App';

const Cart = ({ isVisible, setIsVisible }) => {
	const { cart, products } = React.useContext(shopStateContext);
	const navigate = useNavigate();

	return (
		<div className={isVisible ? 'cart' : 'cart-remove'}>
			<div className='cart-content'>
				<div className='cart-header'>
					<h1>Cart</h1>
					<button
						onClick={() => {
							setIsVisible(false);
						}}>
						Close Cart
					</button>
				</div>
				<div className='cart-products__list'>
					{cart.getAllItems().map(([id, qt]) => {
						const productObj = products.getProduct(id);
						return (
							<div key={productObj.id}>{`${productObj.title} | ${qt}`}</div>
						);
					})}
				</div>
				<div className='cart-summary'>
					<p>{`Total: ${cart
						.getAllItems()
						.reduce(
							(acc, [id, qt]) => (acc += products.getProduct(id).price * qt),
							0
						)
						.toFixed(2)}`}</p>
					<button
						onClick={() => {
							navigate('checkout');
              setIsVisible(false);
						}}>
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
