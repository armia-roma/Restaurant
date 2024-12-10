import {Item, Notification as NotificationType} from "../pages/ItemListPage";
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
	onAddToCart: (value: NotificationType) => void;
}

export default function ItemDetailPage({
	isVisible,
	onClose,
	item,
	onAddToCart,
}: Props) {
	if (!isVisible || !item) return null;

	const [totalPrice, setTotalPrice] = useState(item.price);
	const {form, updateForm} = useFormContext();
	const {handleAddToCart, isLoading, error} = useAddToCart();
	const [notification, setNotification] = useState<NotificationType>({
		visible: false,
		message: "",
		color: "",
	});
	const handleAddToCartExecute = async () => {
		try {
			const response = await handleAddToCart();
			onAddToCart({
				message: "Item Added To Cart Successfuly",
				visible: true,
				color: "bg-green-400",
			});
		} catch (error) {
			onAddToCart({message: error, visible: true});
		}
	};
	useEffect(() => {
		updateForm({item_id: item.id});
		const basePrice = item.price * (form.quantity || 0);
		let totalExtrasPrice = 0;
		form.extras.forEach((extra) => {
			let matchingExtra = item.extrasWithOptions.find(
				(extraOption) => extraOption.extra_id === extra.extraId
			);

			if (matchingExtra) {
				let matchingOption = matchingExtra.option.find(
					(option) => option.id === extra.optionid
				);

				if (matchingOption?.option_has_price) {
					totalExtrasPrice += matchingOption.price;
				}
			}
		});
		const totalPrice = basePrice + totalExtrasPrice;
		setTotalPrice(totalPrice);
	}, [form.quantity]);

	return (
		<div className="fixed flex-col inset-0 bg-opacity-50 flex justify-center items-center">
			{notification.visible && (
				<Notification
					message={notification.message}
					onClose={() =>
						setNotification({
							visible: false,
							message: "",
							color: "",
						})
					}
					color="bg-green-400"
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
