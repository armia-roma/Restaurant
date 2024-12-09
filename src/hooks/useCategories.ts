import {useState, useEffect} from "react";
import apiClient, {RESTAURANT_ID} from "../services/api-client";
import {Category} from "../pages/CategoriesListPage";

export const useCategories = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const fetchCategories = async () => {
		setIsLoading(true);
		try {
			const response = await apiClient.get(
				`/restaurant/categories/${RESTAURANT_ID}`
			);
			const categoryList = response.data.data.categories;
			setCategories([
				{id: "all", name: "All", display_name: "All"},
				...categoryList,
			]);
		} catch (err: any) {
			setError(
				err.response?.data.message ||
					"Failed to load categories. Please try again later."
			);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	return {categories, isLoading, error};
};
