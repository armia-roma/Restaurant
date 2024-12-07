export default function OrderSummaryCard() {
	return (
		<div className="fixed flex flex-col bottom-0 left-0 right-0 h-20 bg-white rounded-t-lg">
			<div className="flex items-center justify-between px-4 py-1 bg-blue-900 rounded-t-lg ">
				<div className="flex items-center space-x-2">
					<div className=" flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-800 font-semibold rounded-md">
						3
					</div>

					<div className="text-sm font-medium text-white cursor-pointer">
						View Cart
					</div>
				</div>

				<div className="text-lg font-semibold  text-white">
					<span>0</span> <span>AED</span>
				</div>
			</div>

			<p className="text-center text-sm p-1 text-blue-900">
				Prices are in AED and are inclusive of 10% service charges, 5%
				VAT & 7% Municipality fee.
			</p>
		</div>
	);
}
