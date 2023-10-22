import { SideHomeIcon, SideShortsIcon, SideSubIcon } from "../Icon/icon";

const SIZE = 24;
const WHITE = "#fff";

export const SidebarData = [
	{
		icon: <SideHomeIcon size={SIZE} color={WHITE} />,
		title: "홈",
		link: "/",
	},
	{
		icon: <SideShortsIcon size={SIZE} color={WHITE} />,
		title: "Shorts",
		link: "/shorts",
	},
	{
		icon: <SideSubIcon size={SIZE} color={WHITE} />,
		title: "구독",
		link: "/feed/subscription",
	},
];
