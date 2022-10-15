import { useEffect, useState } from 'react';

const useCart = () => {
	const [cart, setCart] = useState({});

	const updateItemCount = (itemId, count = 1) => {
		setCart((prev) => {
			const { [itemId]: quantity, ...rest } = prev;
			if (quantity === undefined) {
				return { ...rest, [itemId]: count };
			}

			const res = quantity + count;
			if (res > 0) {
				return { ...rest, [itemId]: res };
			}
			return rest; // item count went below 0 so item is deleted.
		});
	};

	const deleteItem = (itemId) => {
		if (!cart.hasOwnProperty(itemId)) {
			return;
		}

		const { [itemId]: val, ...rest } = cart;
		if (val) {
			setCart(rest);
		}
	};

	const getAllItems = () => {
		return Object.entries({ ...cart });
	};

	const getItem = (itemId) => {
		const item = cart[itemId] || 0;
		return item;
	};

	return {
		updateItemCount,
		deleteItem,
		getAllItems,
		getItem,
		count: Object.values(cart).reduce((acc = 0, cur) => acc + cur, 0),
	};
};

const useProducts = () => {
	const [products, setProducts] = useState([]);

	const fetchAllProducts = async () => {
		try {
			const res = await fetch(`${process.env.REACT_APP_SHOP_URL}/products`);
			const data = await res.json();
			setProducts(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchAllProducts();
	}, []);

	const getAllProducts = () => {
		return [...products];
	};

	const getProduct = (id) => {
		const res = products.find((x) => x.id === parseInt(id));
		return res ? { ...res } : undefined;
	};

	return {
		getAllProducts,
		getProduct,
	};
};

const shortenText = (text, maxSize, textEnd = '...') => {
	return text.length > maxSize ? text.slice(0, maxSize) + textEnd : text;
};

export { useCart, useProducts, shortenText };
