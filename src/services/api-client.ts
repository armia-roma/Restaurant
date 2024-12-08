import axios from "axios";

const apiClient = axios.create({
	baseURL:
		"https://stg.tdh.start-tech.ae/api/8661e1bc-87d4-11ef-ba55-0050563f7167",
});

export default apiClient;

export const RESTAURANT_ID = "2da6c53a-522d-485d-b77c-2fafd601ff0c";
