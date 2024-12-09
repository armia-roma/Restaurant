interface Props {
	AddToCard: () => void;
}
export default function AddToCard({AddToCard}: Props) {
	return (
		<div className="flex justify-between items-center px-4 mt-2 bg-blue-900 rounded-xl cursor-pointer">
			<div
				className="flex justify-center align-center space-x-4 p-2"
				onClick={() => AddToCard()}
			>
				<div className="bg-gray-200 text-blue-900 flex justify-center align-center w-4 text-center rounded-sm">
					+
				</div>
				<p className="text-md text-white">Add to Cart</p>
			</div>
			<div className="text-white">AED 234</div>
		</div>
	);
}
