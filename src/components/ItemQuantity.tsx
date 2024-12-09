import {useState} from "react";
import {Item} from "../pages/ItemListPage";
interface Props {
	item: Item;
	onQuantityChange: (quantity: number) => void;
}
export default function ItemQuantity({item, onQuantityChange}: Props) {
	const [quantity, setQuantity] = useState<number>(1);

	const handleQuantityChange = (delta: number) => {
		const newQuantity = quantity + delta;
		if (newQuantity >= 1) {
			setQuantity(newQuantity);
		}
		onQuantityChange(quantity);
	};

	return (
		<div className="flex items-center justify-between mb-2 px-3">
			<div className="text-sm font-semibold">AED {item.price}</div>
			<div className="flex item-center justify-center border border-blue-900 ">
				<button
					className="px-3 py-1 text-blue-900"
					onClick={() => handleQuantityChange(-1)}
				>
					-
				</button>
				<p className="flex justify-center items-center px-4 w-12 text-blue-900 text-center">
					{quantity}
				</p>
				<button
					className="px-3 py-1 text-blue-900"
					onClick={() => handleQuantityChange(1)}
				>
					+
				</button>
			</div>
		</div>
	);
}
