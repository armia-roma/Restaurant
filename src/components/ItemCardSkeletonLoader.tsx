export default function ItemCardSkeletonLoader() {
	return (
		<div className="flex flex-row ma-auto bg-white mb-4 md:mb-4 h-[180px] md:h-[200px] shadow-md rounded-md overflow-hidden animate-pulse">
			<div className="flex-none w-1/3 md:w-1/4">
				<div className="h-full w-full bg-gray-300"></div>
			</div>

			<div className="flex-1 flex flex-col justify-around">
				<div className="p-2">
					<div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
					<div className="h-4 bg-gray-300 rounded w-full mb-2"></div>

					<div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
				</div>

				<div className="flex justify-between p-3 space-x-2">
					<div className="h-6 w-20 bg-gray-300 rounded"></div>
					<div className="h-6 w-20 bg-gray-300 rounded"></div>
				</div>
			</div>
		</div>
	);
}
