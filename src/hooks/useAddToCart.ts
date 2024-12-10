import {useState} from "react";
import {useFormContext} from "../contexts/FormContext";
import {addToCart} from "../utilities/addToCard";

export function useAddToCart() {
	const {form} = useFormContext();
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleAddToCart = async () => {
		setIsLoading(true);

		if (!form.restaurant_id || !form.item_id || !form.quantity) {
			throw new Error("Missing required fields.");
		}
		try {
			await addToCart({
				restaurant_id: form.restaurant_id.toString(),
				item_id: form.item_id,
				quantity: form.quantity,
				extras: form.extras,
			});
			console.log("Item successfully added to cart!");
		} catch (error: any) {
			setError(
				error.response?.data.message ||
					`Error adding to cart:, ${error}`
			);
		} finally {
			setIsLoading(false);
		}
	};

	return {handleAddToCart, isLoading, error};
}
