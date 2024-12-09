import {useEffect, useState} from "react";
import SearchBar from "../components/SearchBar";
import Fuse from "fuse.js";
import CategoryCard from "../components/CategoryCard";
import {RESTAURANT_ID} from "../services/api-client";
import {fetchCategories} from "../services/categoriesService";
import CategorySkeletonLoader from "./../components/CategorySkeletonLoader";
export interface Category {
	id: number;
	name: string;
	display_name: string;
	image: string;
	is_closed: boolean;
	opens_at: null | string;
	count_sub_categories: number;
}

export default function CategoriesListPage() {
	const [isLoading, setIsLoading] = useState(false);

	const [categories, setCategories] = useState<Category[]>([]);

	const [filterList, setFilterList] = useState<typeof categories>(categories);

	const [error, setError] = useState({message: "", visible: false, type: ""});

	const fetchAndSetCategories = async () => {
		setIsLoading(true);
		try {
			const categoryList = await fetchCategories(RESTAURANT_ID);
			setCategories(categoryList);
			setFilterList(categoryList);
			setError({message: "", visible: false, type: ""});
		} catch (err) {
			setError({message: err.message, visible: true, type: ""});
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchAndSetCategories();
	}, []);
	const fuse = new Fuse(categories, {keys: ["name"], threshold: 0.5});

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
				{isLoading ? (
					Array.from({length: 6}, (_, index) => (
						<CategorySkeletonLoader key={index} />
					))
				) : categories.length == 0 ? (
					<div className="bg-gray-50 flex justify-center items-center h-full w-full">
						<div className="text-center text-lg text-gray-500">
							No categories available.
						</div>
					</div>
				) : (
					filterList?.map((category) => (
						<CategoryCard category={category} key={category.id} />
					))
				)}
			</div>
		</div>
	);
}
