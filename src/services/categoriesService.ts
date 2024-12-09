import {Category} from "../pages/CategoriesListPage";
import apiClient from "./api-client";

export const fetchCategories = async (
	restaurantId: number | string
): Promise<Category[]> => {
	try {
		const response = await apiClient.get(
			`/restaurant/categories/${restaurantId}`
		);
		return response.data.data.categories;
	} catch (error) {
		if (error instanceof Error) {
			if ("response" in error && error.response) {
				throw new Error(
					(error.response as any)?.data?.message ||
						"Something went wrong!"
				);
			} else if ("request" in error && error.request) {
				throw new Error(
					"Oops! It seems like we didn’t get a response from the server. Please try again later."
				);
			}
		}
		throw new Error("An unknown error occurred.");
	}
};
