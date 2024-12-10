import apiClient from "../services/api-client";

interface AddToCartData {
	restaurant_id: number;
	item_id: number;
	quantity: number;
	extras?: Array<{
		option_id: number;
		extra_id: number;
	}>;
}

export const addToCart = async (data: AddToCartData) => {
	const formData = new FormData();

	formData.append("restaurant_id", data.restaurant_id.toString());
	formData.append("item_id", data.item_id.toString());
	formData.append("quantity", data.quantity.toString());

	if (data.extras) {
		data.extras.forEach((extra, index) => {
			formData.append(
				`extras[${index}][option_id]`,
				extra.option_id.toString()
			);
			formData.append(
				`extras[${index}][extra_id]`,
				extra.extra_id.toString()
			);
		});
	}

	return apiClient.post("/restaurant/order/order-item", formData, {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	});
};
