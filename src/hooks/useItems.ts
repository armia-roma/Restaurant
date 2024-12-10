import {useEffect, useState, useContext} from "react";
import apiClient, {RESTAURANT_ID} from "../services/api-client";
import {handleApiError} from "../utilities/errorHandler";
import {Item} from "../pages/ItemListPage";
import {useFormContext} from "../contexts/FormContext";

interface UseItemsReturn {
	items: Item[];
	error: {message: string; visible: boolean; type: string};
	isLoading: boolean;
	fetchItems: (categoryId?: string | number) => void;
}
export const useItems = (
	initialCategoryId?: string | number
): UseItemsReturn => {
	const [items, setItems] = useState<Item[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const {updateForm} = useFormContext();
	const [error, setError] = useState({
		message: "",
		visible: false,
		type: "",
	});

	const fetchItems = async (categoryId?: number | string) => {
		setIsLoading(true);
		try {
			const response = await apiClient.get(
				`/restaurant/${RESTAURANT_ID}`,
				{
					params: categoryId ? {cat: categoryId} : {},
				}
			);
			const {data} = response.data;
			const {restaurant} = data.restaurant;
			setItems(data.items.data);
			updateForm({restaurant_id: restaurant.id});

			setError({message: "", visible: false, type: ""});
		} catch (catchError) {
			const apiError = handleApiError(catchError);
			setError(apiError);
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		if (initialCategoryId !== undefined) {
			fetchItems(initialCategoryId);
		}
	}, [initialCategoryId]);

	return {items, fetchItems, isLoading, error};
};