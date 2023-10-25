import {
	ProfileChannelIcon,
	ProfileChangeIcon,
	ProfileLogoutIcon,
	ProfileStudioIcon,
	ProfileCenterIcon,
	ProfileOpinionIcon,
	ProfileSettingIcon,
	ProfileThemeIcon,
} from "@/constants/Icon/icon";

const DropdownHomeData = [
	{
		icon: <ProfileChannelIcon />,
		title: "내 채널",
		link: "/",
	},
	{
		icon: <ProfileStudioIcon />,
		title: "YouTube 스튜디오",
		link: "/",
	},
	{
		icon: <ProfileChangeIcon />,
		title: "계정 전환",
		link: "/",
	},
	{
		icon: <ProfileLogoutIcon />,
		title: "로그아웃",
		link: "/",
	},
];

const DropdownSettingData = [
	{
		icon: <ProfileThemeIcon />,
		title: "디자인: 기기테마",
		link: "/",
	},
	{
		icon: <ProfileSettingIcon />,
		title: "설정",
		link: "/",
	},
	{
		icon: <ProfileCenterIcon />,
		title: "고객센터",
		link: "/",
	},
	{
		icon: <ProfileOpinionIcon />,
		title: "의견 보내기",
		link: "/",
	},
];

export const ProfileDropdownData = [
	{
		title: "home",
		list: DropdownHomeData,
	},
	{
		title: "setting",
		list: DropdownSettingData,
	},
];
