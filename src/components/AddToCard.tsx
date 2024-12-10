import {useAddToCart} from "../hooks/useAddToCart";

interface Props {
	totalPrice: number;
	onAddToCard: () => void;
}

export default function AddToCard({totalPrice, onAddToCard}: Props) {
	const {handleAddToCart, isLoading, error} = useAddToCart();

	return (
		<div
			className="flex justify-between items-center px-4 mt-2 bg-blue-900 rounded-xl cursor-pointer hover:scale-95 transition-transform duration-200"
			onClick={() => onAddToCard()}
		>
			<div className="flex justify-center align-center space-x-4 p-2">
				<div className="bg-gray-200 text-blue-900 flex justify-center align-center w-4 text-center rounded-sm">
					{isLoading ? "..." : "+"}
				</div>
				<p className="text-md text-white">
					{isLoading ? "Adding to Cart..." : "Add to Cart"}
				</p>
			</div>
			<div className="text-white">{totalPrice} AED</div>
		</div>
	);
}
