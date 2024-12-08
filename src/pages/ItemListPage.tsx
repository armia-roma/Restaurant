import {useEffect, useState} from "react";
import ItemCategoryBanner from "../components/ItemCategoryBanner";
import ItemCard from "../components/ItemCard";
import OrderSummaryCard from "./../components/OrderSummaryCard";
import ItemDetailPage from "./ItemDetailPage";
import ItemCardSkeletonLoader from "../components/ItemCardSkeletonLoader";
import ErrorNotification from "../components/ErrorNotification";
import ErrorMessage from "../components/ErrorMessage";
import apiClient, {RESTAURANT_ID, addToCart} from "../services/api-client";

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

export interface Category {
	id: number | string;
	name: string;
	display_name: string;
	image?: string;
	is_closed?: boolean;
	opens_at?: null;
	count_sub_categories?: number;
}

export const allCategoryId = "all";

export default function ItemListPage() {
	const [items, setItems] = useState<Item[]>([]);
	const [error, setError] = useState({message: "", visible: false});
	const [isModalVisible, setModalVisible] = useState(false);

	const [selectedItem, setSelectedItem] = useState<Item>();

	const [categories, setCategories] = useState<Category[]>([]);

	const [isLoading, setIsLoading] = useState(false);

	const allCategoryDetails = {
		id: allCategoryId,
		name: "All",
		display_name: "All",
	};

	const fetchCategories = () => {
		return apiClient
			.get(`/restaurant/categories/${RESTAURANT_ID}`)
			.then((response) => {
				const categoryList = response.data.data.categories;
				setCategories([allCategoryDetails, ...categoryList]);
				setError({message: "", visible: false});
				return categoryList;
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

	const fetchItems = (categoryId?: number | string) => {
		apiClient
			.get(`/restaurant/${RESTAURANT_ID}`, {
				params: categoryId ? {cat: categoryId} : {},
			})
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
		fetchCategories().then(() => fetchItems());
	}, []);

	const openModal = () => {
		setModalVisible(true);
	};

	const closeModal = () => setModalVisible(false);
	const [selectedCategory, setSelectedCategory] = useState<string | number>(
		allCategoryId
	);

	const handleCategoryClick = (categoryId: number | string) => {
		setSelectedCategory(categoryId);
		if (categoryId === allCategoryId) {
			fetchItems();
		} else {
			fetchItems(categoryId);
		}
	};

	if (error.visible) {
		return <ErrorMessage error={error} retry={() => fetchItems()} />;
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
							handleCategoryClick(categoryId)
						}
					/>
				))}
			</div>
			<div className="bg-gray-50 flex flex-col items-center">
				<div className="container p-4">
					{isLoading
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
