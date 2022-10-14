import React from 'react';
import { useParams } from 'react-router-dom';

import '../styles/ProductInfo.css';
import { shopStateContext } from '../App';

const ProductInfo = () => {
	const { cart, products } = React.useContext(shopStateContext);
	const { productId } = useParams();
	const item = products.getProduct(productId);

	return (
		<div className='product-info' onClick={(e) => e.stopPropagation()}>
			{item ? (
				<>
					<img src={item.image} alt='' height='300px' />
					<p>{item.title}</p>
					<article>{item.description}</article>
					<p>{'$' + item.price}</p>
					<p>{'Rating: ' + item.rating.rate}</p>
					<button
						onClick={() => {
							cart.updateItemCount(item.id);
						}}>
						Add to Cart
					</button>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default ProductInfo;
