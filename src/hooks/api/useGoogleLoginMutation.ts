import { postGoogleLogin } from "@api/auth/postGoogleLogin";

import { axiosInstance } from "@api/axiosInstance";

import { useMutation } from "@tanstack/react-query";

import { useSetRecoilState } from "recoil";

import { isLoggedInState } from "@store/auth";

export const useGoogleLoginMutation = () => {
	const setIsLoggedIn = useSetRecoilState(isLoggedInState);

	const logInMutation = useMutation({
		mutationFn: postGoogleLogin,
		onSuccess: ({ accessToken }) => {
			localStorage.setItem("ACCESS_TOKEN", accessToken);

			axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;

			console.log(accessToken);

			setIsLoggedIn(true);
		},
		onError: () => {
			console.log("오류");

			setIsLoggedIn(false);
		},
	});

	return { mutateLogin: logInMutation.mutate };
};
