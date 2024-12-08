import {useEffect, useState} from "react";
import ItemCategoryBanner from "../components/ItemCategoryBanner";
import ItemCard from "../components/ItemCard";
import OrderSummaryCard from "./../components/OrderSummaryCard";
import ItemDetailPage from "./ItemDetailPage";
import axios from "axios";
import ItemCardSkeletonLoader from "../components/ItemCardSkeletonLoader";
import ErrorNotification from "../components/ErrorNotification";
import ErrorMessage from "../components/ErrorMessage";
export interface Option {
	id: number;
	name: string;
	option_has_price: boolean;
	currency: string;
	price: number;
}

export interface ExtraWithOption {
	is_active: number;
	name: string;
	max_options: number;
	extra_type_name: "radio" | "checkbox";
	is_required: number;
	extra_id: number;
	option: Option[];
}
export interface Item {
	id: number;
	image: string;
	price: number;
	name: string;
	display_name: string;
	description: string;
	extrasWithOptions: ExtraWithOption[];
}
export default function ItemListPage() {
	const [items, setItems] = useState<Item[]>([]);
	const [error, setError] = useState({message: "", visible: false});
	const [isModalVisible, setModalVisible] = useState(false);

	const [selectedItem, setSelectedItem] = useState<Item>();

	const openModal = (item: Item) => {
		setModalVisible(true);
		setSelectedItem(item);
	};

	const closeModal = () => setModalVisible(false);
	const [selectedCategory, setSelectedCategory] = useState<string | number>();

	const fetchItem = () => {
		axios
			.get(
				"https://stg.tdh.start-tech.ae/api/8661e1bc-87d4-11ef-ba55-0050563f7167/restaurant/2da6c53a-522d-485d-b77c-2fafd601ff0c?cat=3408"
			)
			.then((response) => {
				setItems(response.data.data.items.data);
				setError({message: "", visible: false});
			})
			.catch((error) => {
				if (error.response) {
					setError({
						message:
							error.response.data.message ||
							"Something went wrong!",
						visible: true,
					});
				} else if (error.request) {
					setError({
						message:
							"  message: 'Oops! It seems like we didn’t get a response from the server. Please try again later.",
						visible: true,
					});
				}
			});
	};
	useEffect(() => {
		fetchItem();
	}, []);

	const categories = [
		{
			id: 3449,
			name: "SALADS",
			display_name: "SALADS",
			image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/1.jpg",
			is_closed: false,
			opens_at: null,
			count_sub_categories: 0,
		},
		{
			id: 3450,
			name: "STARTERS",
			display_name: "STARTERS",
			image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/STARTERS.jpg",
			is_closed: false,
			opens_at: null,
			count_sub_categories: 0,
		},
		{
			id: 3451,
			name: "SOUPS",
			display_name: "SOUPS",
			image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/SOUPS.jpg",
			is_closed: false,
			opens_at: null,
			count_sub_categories: 0,
		},
		{
			id: 3456,
			name: "MEAT AND POUL TRY",
			display_name: "MEAT AND POUL TRY",
			image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/MEAT AND POUL TRY.jpg",
			is_closed: false,
			opens_at: null,
			count_sub_categories: 0,
		},
		{
			id: 3452,
			name: "SNACKS",
			display_name: "SNACKS",
			image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/SNACKS.jpg",
			is_closed: false,
			opens_at: null,
			count_sub_categories: 0,
		},
		{
			id: 3453,
			name: "SANDWICHES",
			display_name: "SANDWICHES",
			image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/SANDWICHES.jpg",
			is_closed: false,
			opens_at: null,
			count_sub_categories: 0,
		},
		{
			id: 3454,
			name: "PASTA",
			display_name: "PASTA",
			image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/PASTA.jpg",
			is_closed: false,
			opens_at: null,
			count_sub_categories: 0,
		},
		{
			id: 3455,
			name: "PIZZA",
			display_name: "PIZZA",
			image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/PIZZA.jpg",
			is_closed: false,
			opens_at: null,
			count_sub_categories: 0,
		},
		{
			id: 3457,
			name: "FISH AND SHELLFISH",
			display_name: "FISH AND SHELLFISH",
			image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/FISH AND SHELLFISH.jpg",
			is_closed: false,
			opens_at: null,
			count_sub_categories: 0,
		},
	];
	if (error.visible) {
		return <ErrorMessage error={error} retry={() => fetchItem()} />;
	}
	return (
		<>
			{error.visible && (
				<ErrorNotification
					message={error.message}
					onClose={() => setError({...error, visible: false})}
				/>
			)}
			<div className="flex gap-3 p-4 overflow-scroll scrollbar-hide">
				{categories.map((category) => (
					<ItemCategoryBanner
						key={category.id}
						isSelected={category.id === selectedCategory}
						title={category.display_name}
						categoryId={category.id}
						onClick={(categoryId) =>
							setSelectedCategory(categoryId)
						}
					/>
				))}
			</div>
			<div className="bg-gray-50 flex flex-col items-center">
				<div className="container p-4">
					{items.length === 0
						? Array.from({length: 5}, (_, index) => (
								<ItemCardSkeletonLoader key={index} />
						  ))
						: items.map((item) => (
								<ItemCard
									key={item.id}
									onClick={openModal}
									item={item}
								></ItemCard>
						  ))}
				</div>
			</div>
			<OrderSummaryCard />
			<ItemDetailPage
				isVisible={isModalVisible}
				onClose={closeModal}
				item={selectedItem}
			/>
		</>
	);
}
