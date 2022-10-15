import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Cart.css';
import { shopStateContext } from '../App';

const Cart = ({ isVisible, setIsVisible }) => {
	const { cart, products } = React.useContext(shopStateContext);
	const cartBackgroundRef = React.useRef();
	const cartRef = React.useRef();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (isVisible) {
			cartBackgroundRef.current.className = 'cart';
			cartBackgroundRef.current.style.animation = 'fade-in 500ms';
			cartRef.current.className = 'cart-content';
			cartRef.current.style.animation = 'slide-from-right 500ms';
		} else {
			if (cartBackgroundRef.current.className !== 'cart-remove') {
				cartBackgroundRef.current.style.animation = 'fade-out 500ms';
				cartRef.current.style.animation = 'slide-to-right 500ms';
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
							setIsVisible(false);
							setTimeout(() => {
								navigate('/checkout');
							});
						}}>
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
