import {FaCartShopping} from "react-icons/fa6";
import {MdArrowBackIos} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {useCart} from "../contexts/CartContext";
export default function Nav() {
	const {cart} = useCart();
	const navigate = useNavigate();
	const handleBackClick = () => {
		navigate(-1); // This goes back to the previous page in history
	};
	return (
		<div className="bg-gray-200 p-4">
			<div className="flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<button
						onClick={handleBackClick}
						className=" text-blue-900  flex items-center space-x-1 border"
					>
						<MdArrowBackIos />

						<span>Back</span>
					</button>
				</div>

				<div className="text-lg  text-blue-900 font-semibold">
					<h1>In Room Dining</h1>
				</div>

				<div className="relative inline-block">
					<span className="absolute -top-3 -right-2 text-white bg-blue-900 text-xs text-[13px] rounded-full w-4 h-4 flex items-center justify-center">
						{cart.count}
					</span>
					<div className=" text-blue-900">
						<FaCartShopping />
					</div>
				</div>
			</div>
		</div>
	);
}
