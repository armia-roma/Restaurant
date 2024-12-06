function truncateText(text: string, maxLength: number) {
	if (text.length <= maxLength) {
		return text;
	}
	return text.slice(0, maxLength) + "...";
}

export default function ItemCard() {
	return (
		<div className="flex flex-row mb-4 md:mb-4 h-[180px] md:h-[200px]  shadow-md bg-white rounded-md mx-auto overflow-hidden">
			{/* do not spreed utomaticaly */}
			<div className="flex-none w-1/3 md:w-1/4">
				<img
					src="https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/INDIAN.jpg"
					alt=""
					className="h-full w-full object-cover"
				/>
			</div>
			<div className=" flex-1 flex flex-col justify-between">
				{/* <div className="p-2"> */}
				<h2 className="text-md md:text-xl mb-1 p-2 md:p-4">
					Card Title
				</h2>
				<div className="overflow-hidden mb-1">
					<p className="text-gray-600 text-sm md:text-lg overflow-hidden break-words p-2 md:p-4">
						{truncateText(
							`This is a brief description of the content inside
							the card. It provides more information about the
							image or topic.`,
							100
						)}
					</p>
				</div>
				{/* </div> */}
				<div className="flex items-center justify-between p-2 md:p-4">
					<span className="text-lg font-bold text-gray-800">
						$12.99
					</span>
					<button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-lg hover:bg-blue-600 transition">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
