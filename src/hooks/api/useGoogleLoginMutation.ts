import { postGoogleLogin } from "@api/auth/postGoogleLogin";
import { axiosInstance } from "@api/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useGoogleLoginMutation = () => {
	const logInMutation = useMutation({
		mutationFn: postGoogleLogin,
		onSuccess: ({ accessToken }) => {
			localStorage.setItem("ACCESS_TOKEN", accessToken);

			axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

			console.log(accessToken);
		},
		onError: () => {
			console.log("오류");
		},
	});

	return { mutateLogin: logInMutation.mutate };
};
