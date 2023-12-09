import { axiosInstance } from "../axiosInstance";

export interface TokenData {
	accessToken: string;
}

export const postNewToken = async () => {
	const { data } = await axiosInstance.post<TokenData>("/token");

	return data;
};
