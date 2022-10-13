import { useEffect, useState } from 'react';

export const useCart = () => {
	const [cart, setCart] = useState({});

	useEffect(() => {
		console.log(cart);
	}, [cart]);
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
			deleteItem(itemId);
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
		count: Object.values(cart).reduce((acc=0, cur) => acc + cur, 0),
	};
};
