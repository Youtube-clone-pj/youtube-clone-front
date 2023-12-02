interface locationProp {
	pathname: string;
	search: string;
}

export const pathnameCheck = ({ pathname, search }: locationProp) => {
	if (!search) {
		if (pathname.includes("shorts")) {
			return "Shorts";
		} else if (pathname.includes("subscription")) {
			return "구독";
		} else if (pathname.includes("you")) {
			return "나";
		} else if (pathname.includes("channel")) {
			return "내 채널";
		} else if (pathname.includes("history")) {
			return "시청 기록";
		} else {
			return "홈";
		}
	} else {
		if (search.includes("?later")) {
			return "나중에 볼 동영상";
		} else if (search.includes("?like")) {
			return "좋아요 표시한 동영상";
		}
	}
};
