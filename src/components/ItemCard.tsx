function truncateText(text: string, maxLength: number) {
	if (text.length <= maxLength) {
		return text;
	}
	return text.slice(0, maxLength) + "...";
}

interface Props {
	price: number;
	title: string;
	image: string;
	description: string;
}
export default function ItemCard({title, image, description, price}: Props) {
	return (
		<div className="flex flex-row mb-4 md:mb-4 h-[180px] md:h-[200px] shadow-md bg-white rounded-md mx-auto overflow-hidden">
			<div className="flex-none w-1/3 md:w-1/4">
				<img
					src={image}
					alt=""
					className="h-full w-full object-cover"
				/>
			</div>
			<div className=" flex-1 flex flex-col justify-around">
				<div className="p-2">
					<h2 className="text-md md:text-xl mb-1 md:p-4">{title}</h2>
					<div className="overflow-hidden mb-1">
						<p className="text-gray-600 text-sm md:text-lg overflow-hidden break-words md:p-4">
							{truncateText(description, 50)}
						</p>
					</div>
				</div>
				<div className="flex items-center justify-between p-2 md:p-4">
					<span className="text-sm font-bold text-gray-800">
						AED {price}
					</span>
					<button className="bg-blue-900 text-white text-sm px-2 md:px-4 py-1 md:py-2 rounded-md hover:bg-blue-600 transition">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
