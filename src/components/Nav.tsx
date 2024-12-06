import {FaCartShopping} from "react-icons/fa6";
import {MdArrowBackIos} from "react-icons/md";

export default function Nav() {
	return (
		<div className="bg-gray-200 p-4">
			<div className="flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<button className=" text-indigo-900  flex items-center space-x-1 border">
						<MdArrowBackIos />

						<span>Back</span>
					</button>
				</div>

				<div className="text-lg  text-indigo-900 font-semibold">
					<h1>In Room Dining</h1>
				</div>

				<div className="relative inline-block">
					<span className="absolute -top-3 -right-2 text-white bg-indigo-900 texblackt-xs text-[13px] rounded-full w-4 h-4 flex items-center justify-center">
						3
					</span>
					<div className=" text-indigo-900">
						<FaCartShopping />
					</div>
				</div>
			</div>
		</div>
	);
}
