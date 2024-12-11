import React, {createContext, useContext, useState, ReactNode} from "react";

type CartType = {
	count: number;
	price: number;
};

type CartContextType = {
	cart: CartType;
	updateCart: (newCart: CartType) => void;
};
const defaultCartContext: CartContextType = {
	cart: {count: 0, price: 0},
	updateCart: () => {
		throw new Error("updateCart function must be overridden by a provider");
	},
};
const CartContext = createContext<CartContextType>(defaultCartContext);

export const CartProvider: React.FC<{children: ReactNode}> = ({children}) => {
	const [cart, setCart] = useState({count: 0, price: 0});

	const updateCart = (newCart: CartType) => {
		setCart(newCart);
	};

	return (
		<CartContext.Provider value={{cart, updateCart}}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
