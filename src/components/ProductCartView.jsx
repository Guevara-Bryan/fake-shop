import React from 'react';
import { shopStateContext } from '../App';
import { shortenText } from '../utils';
import { Link } from 'react-router-dom';
import '../styles/ProductCartView.css';

const ProductCartView = ({
	id,
	title,
	price,
	image,
	quantity,
	setIsVisible,
}) => {
	const { cart } = React.useContext(shopStateContext);

	return (
		<div className='cart__item-container'>
			<div className='cart__item-image-container'>
				<img src={image} alt='' />
			</div>
			<div className='cart__item-header'>
				<Link
					to={`/product-info/${id}`}
					onClick={() => {
						setIsVisible(false);
					}}>
					{shortenText(title, 60)}
				</Link>
			</div>
			<div className='cart__item-price'>
				<p>${price.toFixed(2)}</p>
			</div>
			<div className='cart__item-quantity'>
				<button
					className='cart__item-button'
					onClick={() => {
						cart.updateItemCount(id, -1);
					}}>
					-
				</button>
				<p>{quantity}</p>
				<button
					className='cart__item-button'
					onClick={() => {
						cart.updateItemCount(id, 1);
					}}>
					+
				</button>
				<button
					className='cart__item-button'
					onClick={() => {
						cart.deleteItem(id);
					}}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ProductCartView;
