import {Item} from "../pages/ItemListPage";
import ExtraOption from "../components/ExtraOption";
import {RiCloseCircleLine} from "react-icons/ri";
import {useEffect, useState} from "react";
import ItemQuantity from "../components/ItemQuantity";
import AddToCard from "../components/AddToCard";
import {useFormContext} from "../contexts/FormContext";
import {useAddToCart} from "../hooks/useAddToCart";
import Notification from "../components/Notification.tsx";
interface Props {
	isVisible: boolean;
	onClose: () => void;
	item?: Item;
}

export default function ItemDetailPage({isVisible, onClose, item}: Props) {
	if (!isVisible || !item) return null;

	const [totalPrice, setTotalPrice] = useState(item.price);
	const {form, updateForm} = useFormContext();
	const {handleAddToCart, isLoading, error} = useAddToCart();
	const [notificationVisible, setNotificationVisible] = useState(false);
	const handleAddToCartExecute = async () => {
		handleAddToCart();
	};
	useEffect(() => {
		updateForm({item_id: item.id});
		const basePrice = item.price * (form.quantity || 0);
		setTotalPrice(basePrice);
	}, []);

	return (
		<div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
			{notificationVisible && (
				<Notification
					message={error}
					onClose={() => setNotificationVisible(false)}
					color="bg-red-400"
				/>
			)}
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
					<ItemQuantity item={item} />
					<div>
						{item.extrasWithOptions.map((extraOption) => (
							<ExtraOption
								extraOption={extraOption}
								key={extraOption.extra_id}
							/>
						))}
					</div>
					<AddToCard
						totalPrice={totalPrice}
						onAddToCard={handleAddToCartExecute}
					/>
				</div>
			</div>
		</div>
	);
}
