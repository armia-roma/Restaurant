import {Item} from "../pages/ItemListPage";
import ExtraOption from "../components/ExtraOption";
import {RiCloseCircleLine} from "react-icons/ri";

interface Props {
	isVisible: boolean;
	onClose: () => void;
	item?: Item;
}

export default function ItemDetailPage({isVisible, onClose, item}: Props) {
	if (!isVisible || !item) return null;

	return (
		<div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
			<div className="bg-white rounded-lg w-11/12 md:w-2/3 p-2 relative max-h-[90vh] overflow-y-auto pb-8">
				<div>
					<button
						className="absolute top-4 right-4  font-extrabold flex items-center justify-center text-blue-900 "
						onClick={onClose}
					>
						<RiCloseCircleLine size={50} />
					</button>
				</div>
				<div>
					<div className="flex justify-center items-center">
						<img
							className="object-cover"
							src={item.image}
							alt={`${item.display_name}`}
						/>
					</div>
					<div className="p-2">
						<h2 className="text-xl py-2">{item.display_name}</h2>
						<p className="text-sm">{item.description}</p>
					</div>
					{/* item quantity  */}
					<div className="flex items-center justify-between mb-2 px-3">
						<div className="text-sm font-semibold">
							AED {item.price}
						</div>
						<div className="flex item-center justify-center border border-blue-900 ">
							<button className="px-3 py-1 text-blue-900">
								-
							</button>
							<p className="flex justify-center items-center px-4 w-12 text-blue-900 text-center">
								1
							</p>
							<button className="px-3 py-1 text-blue-900">
								+
							</button>
						</div>
					</div>
					{/* option */}
					<div className="overflow-y-auto max-h-48">
						{item.extrasWithOptions.map((extraOption) => (
							<ExtraOption
								extraOption={extraOption}
								key={extraOption.extra_id}
							/>
						))}
					</div>
					{/* Add to cart */}
					<div className="flex justify-between items-center px-4 mt-2 bg-blue-900 rounded-xl cursor-pointer">
						<div className="flex justify-center align-center space-x-4 p-2 ">
							<div className="bg-gray-200 text-blue-900 flex justify-center align-center w-4 text-center rounded-sm">
								+
							</div>
							<p className="text-md text-white">"Add to Cart"</p>
						</div>
						<div className="text-white">AED 234</div>
					</div>
				</div>
			</div>
		</div>
	);
}
