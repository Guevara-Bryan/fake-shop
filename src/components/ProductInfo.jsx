import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../styles/ProductInfo.css';

const ProductInfo = ({ products }) => {
	const navigate = useNavigate();
	const { productId } = useParams();
	const item = products[productId];
	return (
		<div className='block-screen' onClick={() => navigate('/products')}>
			<div className='product-info' onClick={(e) => e.stopPropagation()}>
				<img src={item.image} alt='' height='300px'/>
				<p>{item.title}</p>
				<article>item.description</article>
				<p>{'$' + item.price}</p>
				<p>{'Rating: ' + item.rating.rate}</p>
				<button>Add to Cart</button>
			</div>
		</div>
	);
};

export default ProductInfo;
