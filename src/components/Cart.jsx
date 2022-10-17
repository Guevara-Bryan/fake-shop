import React from 'react';

import '../styles/Cart.css';
import { shopStateContext } from '../App';
import ProductCartView from './ProductCartView';

const Cart = ({ isVisible, setIsVisible }) => {
	const { cart, products } = React.useContext(shopStateContext);
	const cartBackgroundRef = React.useRef();
	const cartRef = React.useRef();
	const ANIMATION_DURATION = 500; // in ms

	// Adds the animation to the cart before removing it from the dom.
	React.useEffect(() => {
		if (isVisible) {
			cartBackgroundRef.current.className = 'cart';
			cartBackgroundRef.current.style.animation = `fade-in ${ANIMATION_DURATION}ms`;
			cartRef.current.className = 'cart-content';
			cartRef.current.style.animation = `slide-from-right ${ANIMATION_DURATION}ms`;
		} else {
			if (cartBackgroundRef.current.className !== 'cart-remove') {
				cartBackgroundRef.current.style.animation = `fade-out ${ANIMATION_DURATION}ms`;
				cartRef.current.style.animation = `slide-to-right ${ANIMATION_DURATION}ms`;
				setTimeout(() => {
					cartBackgroundRef.current.className = 'cart-remove';
				}, 500);
			}
		}
	}, [isVisible]);

	return (
		<div ref={cartBackgroundRef} className='cart-remove'>
			<div ref={cartRef}>
				<div className='cart-header'>
					<h1>Cart</h1>
					<button
            class='cart-header__exit-button button'
						onClick={() => {
							setIsVisible(false);
						}}
					>
						Close Cart
					</button>
				</div>
				<div className='cart-products__list'>
					{cart.getAllItems().map(([id, qt]) => {
						const productObj = products.getProduct(id);
						productObj.quantity = qt;
						productObj.setIsVisible = setIsVisible;
						return <ProductCartView key={id} {...productObj} />;
					})}
				</div>
				<div className='cart-summary'>
					<p>{`Total: ${cart
						.getAllItems()
						.reduce((acc, [id, qt]) => (acc += products.getProduct(id).price * qt), 0)
						.toFixed(2)}`}</p>
					<button>Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
