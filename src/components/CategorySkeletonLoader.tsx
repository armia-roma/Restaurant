export default function ItemCardSkeletonLoader() {
	return (
		<>
			<div className="flex flex-row ma-auto bg-white mb-4 md:mb-4 h-[180px] md:h-[200px] shadow-md"></div>
			<div className="p-2 w-1/2">
				<div className="bg-gray-200 rounded-lg shadow-md overflow-hidden w-full h-80 md:h-80 ">
					<div className="w-full h-full object-cover" />
				</div>
			</div>
		</>
	);
}
