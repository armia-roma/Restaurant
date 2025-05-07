import axios from "axios";
const apiKey = import.meta.env.VITE_API_BASE_URL;
const apiClient = axios.create({
	baseURL: `${apiKey}`,
});

export default apiClient;

export const RESTAURANT_ID = "2da6c53a-522d-485d-b77c-2fafd601ff0c";
