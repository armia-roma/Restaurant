interface ErrorResponse {
	message: string;
	visible: boolean;
	type?: string;
}

export const handleApiError = (error: any): ErrorResponse => {
	if (error.response) {
		console.log(error, "status");
		if (error.response.status >= 500) {
			return {
				message:
					error.response.data.message ||
					"Server error! Please try again later.",
				visible: true,
				type: "server",
			};
		}

		if (error.response.status === 400) {
			return {
				message:
					error.response.data.message ||
					"There seems to be an issue with your input. Please review and try again.",
				visible: true,
			};
		}

		return {
			message:
				error.response.data.message ||
				"Something went wrong! Please try again.",
			visible: true,
		};
	}

	if (error.request) {
		return {
			message:
				"Network error! Please check your connection and try again.",
			visible: true,
		};
	}

	return {
		message: "An unexpected error occurred. Please try again later.",
		visible: true,
	};
};
