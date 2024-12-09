import {Item, Option} from "../pages/ItemListPage";
import ExtraOption from "../components/ExtraOption";
import {RiCloseCircleLine} from "react-icons/ri";
import {useState} from "react";
import ItemQuantity from "../components/ItemQuantity";
import AddToCard from "../components/AddToCard";
interface Props {
	isVisible: boolean;
	onClose: () => void;
	item?: Item;
	restaurantId: number | string;
}
interface SelectedExtras {
	extra_id: number;
	option_id: number | string;
}

export default function ItemDetailPage({isVisible, onClose, item}: Props) {
	if (!isVisible || !item) return null;

	const [selectedExtras, setSelectedExtras] = useState<SelectedExtras[]>([]);

	const handleExtraOptionSelect = (extra_id: number, option: Option) => {
		setSelectedExtras((prev) => {
			// Remove any existing selection for this extra
			const filtered = prev.filter((e) => e.extra_id !== extra_id);
			// Add the new selection
			return [...filtered, {extra_id, option_id: option.id}];
		});
	};
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
					<ItemQuantity item={item} />
					{/* option */}
					<div>
						{item.extrasWithOptions.map((extraOption) => (
							<ExtraOption
								extraOption={extraOption}
								key={extraOption.extra_id}
								onOptionChosen={(option) =>
									handleExtraOptionSelect(
										extraOption.extra_id,
										option
									)
								}
							/>
						))}
					</div>
					{/* Add to cart */}
					<AddToCard AddToCard={() => console.log()} />
				</div>
			</div>
		</div>
	);
}
