import React, {ReactNode} from "react";
interface Props {
	isVisible: boolean;
	onClose: () => void;
	children?: ReactNode;
}
const ItemDetails = ({isVisible, onClose, children}: Props) => {
	if (!isVisible) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white rounded-lg w-96 p-2 relative">
				<button
					className="absolute top-2 right-2   h-5 w-5 flex items-center justify-center text-blue-900 border border-blue-900 rounded-full "
					onClick={onClose}
				>
					&times;
				</button>
				<div>
					<img
						src="https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/PIZZA.jpg"
						alt=""
					/>
					<div className="p-2">
						<h2 className="text-xl py-2">Prime Beef Tenderloin</h2>
						<p className="text-base">
							Grilled to your preference, served with green beans,
							garlic mashed potatoes & pepper corn sauce or
							mushroom sauce
						</p>
					</div>

					<div className="flex items-center justify-between mb-2 px-3">
						<div className="text-sm font-semibold">AED 148</div>
						<div className="flex item-center  justify-between border border-blue-900 ">
							<button className="px-3 py-1 text-blue-900">
								-
							</button>
							<p className="text-center w-10 text-blue-900">1</p>
							<button className="px-3 py-1 text-blue-900">
								+
							</button>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="bg-gray-50 p-2 text-lg font-medium">
							Add Side
						</div>
						<div className="flex items-center justify-between p-2">
							<p className="text-base font-medium text-gray-700 ">
								this content to add
							</p>
							<div className="flex items-center space-x-2">
								<p className="text-base text-gray-800">
									+ AED 30
								</p>
								<input
									type="checkbox"
									id="html"
									name="fav_language"
									value="HTML"
									className="w-5 h-5 border border-gray-900 rounded appearance-none checked:bg-blue-900 "
								/>
							</div>
						</div>
						<div className="flex items-center justify-between p-2">
							<p className="text-base font-medium text-gray-700 ">
								this content to add
							</p>
							<div className="flex items-center space-x-2">
								<p className="text-base text-gray-800">
									+ AED 30
								</p>
								<input
									type="checkbox"
									id="html"
									name="fav_language"
									value="HTML"
									className="w-5 h-5 border border-gray-900 rounded appearance-none checked:bg-blue-900 "
								/>
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center px-4 bg-blue-900 rounded-xl cursor-pointer">
						<div className="flex justify-center align-center space-x-4 p-2 ">
							<div className="bg-gray-200 text-blue-900 flex justify-center align-center w-4 text-center rounded-sm">
								+
							</div>
							<p className="text-md text-white">Add to Cart</p>
						</div>
						<div className="text-white">AED 148.00</div>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

export default ItemDetails;
