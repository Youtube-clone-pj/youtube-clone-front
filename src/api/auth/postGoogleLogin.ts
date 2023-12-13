import { axiosInstance } from "@api/axiosInstance";

interface PostGoogleLoginRequestBody {
	accessToken: string;
}

export const postGoogleLogin = async ({
	accessToken,
}: PostGoogleLoginRequestBody) => {
	const { data } = await axiosInstance.post(
		"http://43.202.151.8:8000/api/auth/google",
		{ accessToken },
	);

	return data;
};
