import {useState} from "react";
import ItemCategoryBanner from "../components/ItemCategoryBanner";
import Items from ".././Items.json";
import ItemCard from "../components/ItemCard";
import OrderSummaryCard from "./../components/OrderSummaryCard";
import ItemDetails from "../components/ItemDetails";

export default function ItemListPage() {
	const [isModalVisible, setModalVisible] = useState(false);

	const openModal = () => setModalVisible(true);

	const closeModal = () => setModalVisible(false);

	const data = Items.data;
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

	const [selected, setSelected] = useState<string | number>();
	return (
		<>
			<div className="flex gap-3 p-4 overflow-scroll scrollbar-hide">
				{categories.map((category) => (
					<ItemCategoryBanner
						isSelect={category.id === selected}
						title={category.display_name}
						categoryId={category.id}
						onClick={(categoryId) => setSelected(categoryId)}
					/>
				))}
			</div>
			<div className="bg-gray-50 flex flex-col items-center">
				<div className="container p-4">
					{data.map((item) => (
						<ItemCard
							onClick={openModal}
							id={item.id}
							image={item.image}
							title={item.display_name}
							price={item.price}
							description={item.description}
						></ItemCard>
					))}
				</div>
			</div>
			<OrderSummaryCard />
			<ItemDetails isVisible={isModalVisible} onClose={closeModal} />
		</>
	);
}
