import {useState} from "react";
import SearchBar from "../components/SearchBar";
import Fuse from "fuse.js";
import CategoryCard from "../components/CategoryCard";

export interface Category {
	id: number;
	name: string;
	display_name: string;
	image: string;
	is_closed: boolean;
	opens_at: null | string;
	count_sub_categories: number;
}

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
		opens_at: "Opens at 9:00 PM",
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
		opens_at: "Opens at 9:00 PM",
		count_sub_categories: 0,
	},
	{
		id: 3455,
		name: "PIZZA",
		display_name: "PIZZA",
		image: "https://d3l5wxnahfuscp.cloudfront.net/uploaded_files/images/categories/253/PIZZA.jpg",
		is_closed: false,
		opens_at: "Opens at 9:00 PM",
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
const fuse = new Fuse(categories, {keys: ["name"], threshold: 0.5});
export default function CategoriesListPage() {
	const [filterList, setFilterList] = useState<typeof categories>(categories);

	const handleSearch = (searchQuery: string): void => {
		setFilterList(
			searchQuery
				? fuse.search(searchQuery).map((each) => each.item)
				: categories
		);
	};

	return (
		<div className="container mx-auto bg-white">
			<div className="p-4">
				<SearchBar
					onSearch={handleSearch}
					searchLabel="Search for Categories"
				/>
			</div>

			<div className="flex flex-wrap">
				{filterList?.map((category) => (
					<CategoryCard category={category} key={category.id} />
				))}
			</div>
		</div>
	);
}
