import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ProductItem.css';
import { shopStateContext } from '../App';

const ProductItemOnCheckout = ({ id, title, price, image }) => {
	const MAX_TEXT_LENGTH = 55;
	const { cart } = React.useContext(shopStateContext);

	return (
		<div className='product-item'>
			<div className='product-item__image-frame'>
				<img className='product-item__image' src={image} alt='' />
			</div>
			<Link
				to={`/product-info/${id}`}
				className='product-item__title'>
				<p>
					{title.length > MAX_TEXT_LENGTH
						? title.slice(0, MAX_TEXT_LENGTH) + ' ...'
						: title}
				</p>
			</Link>
			<div className='product-item__price'>
				<p>{'$' + price.toFixed(2)}</p>
			</div>
			<button
				onClick={() => {
					cart.updateItemCount(id, -1);
				}}>
				-
			</button>
			<div>{cart.getItem(id)}</div>
			<button
				onClick={() => {
					cart.updateItemCount(id);
				}}>
				+
			</button>
			<button
				onClick={() => {
					cart.deleteItem(id);
				}}>
				Delete
			</button>
		</div>
	);
};
export default ProductItemOnCheckout;
