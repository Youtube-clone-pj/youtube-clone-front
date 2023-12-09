import axios from "axios";

import {
	checkAndSetToken,
	handleTokenError,
	handleAPIError,
} from "./interceptors";

export const axiosInstance = axios.create({
	baseURL: "/",
	timeout: 3000,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(
	(response) => response,
	handleTokenError,
);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
