import {Item} from "../pages/ItemListPage";
import {useFormContext} from "./../contexts/FormContext";

interface Props {
	item: Item;
}
export default function ItemQuantity({item}: Props) {
	const {form, updateForm} = useFormContext();

	const handleQuantityChange = (delta: number) => {
		const newQuantity = (form.quantity || 1) + delta;
		if (newQuantity >= 1) {
			updateForm({quantity: newQuantity});
		}
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
					{form.quantity}
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
