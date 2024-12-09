import {Item} from "../pages/ItemListPage";
interface Props {
	totalPrice: number;
	addToCard: () => void;
}
export default function AddToCard({totalPrice, addToCard}: Props) {
	return (
		<div
			className="flex justify-between items-center px-4 mt-2 bg-blue-900 rounded-xl cursor-pointer"
			onClick={() => addToCard()}
		>
			<div className="flex justify-center align-center space-x-4 p-2">
				<div className="bg-gray-200 text-blue-900 flex justify-center align-center w-4 text-center rounded-sm">
					+
				</div>
				<p className="text-md text-white">Add to Cart</p>
			</div>
			<div className="text-white">{totalPrice} AED</div>
		</div>
	);
}
