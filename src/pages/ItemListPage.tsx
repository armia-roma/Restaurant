import {useState} from "react";
import ItemCategoryBanner from "../components/ItemCategoryBanner";
import ItemCard from "../components/ItemCard";
import OrderSummaryCard from "./../components/OrderSummaryCard";
import ItemDetailPage from "./ItemDetailPage";
import ItemCardSkeletonLoader from "../components/ItemCardSkeletonLoader";
import ErrorMessage from "../components/ErrorMessage";
import {useParams} from "react-router-dom";
import {useItems} from "../hooks/useItems";
import {useCategories} from "../hooks/useCategories";

export interface Option {
	id: number | string;
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

export const AllCategoryId = "all";

export default function ItemListPage() {
	const {CategoryId} = useParams();
	const {
		items,
		fetchItems,
		isLoading: itemsLoading,
		error: itemsError,
	} = useItems(CategoryId);

	const {
		categories,
		error: categoriesError,
		isLoading: categoriesLoading,
	} = useCategories();

	const [isModalVisible, setModalVisible] = useState(false);

	const [selectedItem, setSelectedItem] = useState<Item>();

	const openModal = (item: Item) => {
		setSelectedItem(item);
		setModalVisible(true);
	};

	const closeModal = () => setModalVisible(false);
	const [selectedCategory, setSelectedCategory] = useState<string | number>(
		AllCategoryId
	);

	const handleCategoryClick = (categoryId: string | number) => {
		setSelectedCategory(categoryId);
		fetchItems(categoryId !== "all" ? categoryId : undefined);
	};
	if (categoriesError) {
		return (
			<ErrorMessage
				error={{message: categoriesError, visible: true}}
				retry={() => {}}
			/>
		);
	}

	if (itemsError.visible) {
		return (
			<ErrorMessage
				error={itemsError}
				retry={() => fetchItems(selectedCategory)}
			/>
		);
	}
	return (
		<>
			<div className="flex gap-3 p-4 overflow-scroll scrollbar-hide">
				{categories.length === 0 ? (
					<div className="bg-gray-50 flex justify-center items-center h-full w-full">
						<div className="text-center text-lg text-gray-500">
							No categories available.
						</div>
					</div>
				) : (
					categories.map((category) => (
						<ItemCategoryBanner
							key={category.id}
							isSelected={category.id === selectedCategory}
							title={category.display_name}
							categoryId={category.id}
							onClick={(categoryId) =>
								handleCategoryClick(categoryId)
							}
						/>
					))
				)}
			</div>
			<div className="bg-gray-50 flex flex-col items-center">
				<div className="container p-4">
					{itemsLoading ? (
						Array.from({length: 5}, (_, index) => (
							<ItemCardSkeletonLoader key={index} />
						))
					) : items.length === 0 ? (
						<div className="text-center text-lg text-gray-500">
							No items available in this category.
						</div>
					) : (
						items.map((item) => (
							<ItemCard
								key={item.id}
								onClick={openModal}
								item={item}
							></ItemCard>
						))
					)}
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
