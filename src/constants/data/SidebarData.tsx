import {
	SideHomeIcon,
	SideShortsIcon,
	SideSubIcon,
	SideMyChannelIcon,
	SideMyVideoIcon,
	SideHotIcon,
	SideMusicIcon,
	SideMovieIcon,
	SideLiveIcon,
	SideGameIcon,
	SideSportIcon,
	SideSettingIcon,
	SideReportIcon,
	SideCenterIcon,
	SideInfoIcon,
	YouArrowIcon,
	SideCircleIcon,
	SideExploreIcon,
	RecordIcon,
	LaterShowIcon,
	LikeVideoIcon,
} from "../Icon/icon";

const SIZE = 20;
const WHITE = "#fff";

const ListHomeData = [
	{
		icon: <SideHomeIcon size={SIZE} color={WHITE} />,
		title: "홈",
		link: "/",
	},
	{
		icon: <SideShortsIcon size={SIZE} color={WHITE} />,
		title: "Shorts",
		link: "/shorts/1",
	},
	{
		icon: <SideSubIcon size={SIZE} color={WHITE} />,
		title: "구독",
		link: "/feed/subscription",
	},
];

const ListVideoData = [
	{
		icon: <SideMyChannelIcon size={SIZE} color={WHITE} />,
		title: "내 채널",
		link: "/channel/user-bj5em7yz5w",
	},
	{
		icon: <RecordIcon />,
		title: "시청 기록",
		link: "/feed/history",
	},
	{
		icon: <SideMyVideoIcon size={SIZE} color={WHITE} />,
		title: "내 동영상",
		link: "/studio",
	},
	{
		icon: <LaterShowIcon />,
		title: "나중에 볼 동영상",
		link: "/playlist?later",
	},
	{
		icon: <LikeVideoIcon />,
		title: "좋아요 표시한 동영상",
		link: "/playlist?like",
	},
];

const ListSubscriptionData = [
	{
		icon: <SideCircleIcon size={SIZE} color={WHITE} />,
		title: "구독한 채널 이름",
		link: "/channel/userid",
	},
	{
		icon: <SideCircleIcon size={SIZE} color={WHITE} />,
		title: "구독한 채널 이름2",
		link: "/channel/userid",
	},
	{
		icon: <SideExploreIcon size={SIZE} color={WHITE} />,
		title: "채널 탐색",
		link: "/feed/guide_builder",
	},
];

const ListExploreData = [
	{
		icon: <SideHotIcon size={SIZE} color={WHITE} />,
		title: "인기 급상승",
		link: "/",
	},
	{
		icon: <SideMusicIcon size={SIZE} color={WHITE} />,
		title: "음악",
		link: "/",
	},
	{
		icon: <SideMovieIcon size={SIZE} color={WHITE} />,
		title: "영화",
		link: "/",
	},
	{
		icon: <SideLiveIcon size={SIZE} color={WHITE} />,
		title: "실시간",
		link: "/",
	},
	{
		icon: <SideGameIcon size={SIZE} color={WHITE} />,
		title: "게임",
		link: "/",
	},
	{
		icon: <SideSportIcon size={SIZE} color={WHITE} />,
		title: "스포츠",
		link: "/",
	},
];

const ListSettingData = [
	{
		icon: <SideSettingIcon size={SIZE} color={WHITE} />,
		title: "설정",
		link: "/",
	},
	{
		icon: <SideReportIcon size={SIZE} color={WHITE} />,
		title: "신고 기록",
		link: "/",
	},
	{
		icon: <SideCenterIcon size={SIZE} color={WHITE} />,
		title: "고객센터",
		link: "/",
	},
	{
		icon: <SideInfoIcon size={SIZE} color={WHITE} />,
		title: "의견 보내기",
		link: "/",
	},
];

export const SidebarData = [
	{
		id: "home",
		list: ListHomeData,
	},
	{
		id: "video",
		title: "나",
		icon: <YouArrowIcon />,
		click: true,
		link: "/feed/my",
		list: ListVideoData,
	},
	{
		id: "subscription",
		title: "구독",
		list: ListSubscriptionData,
	},
	{
		id: "explore",
		title: "탐색",
		list: ListExploreData,
	},
	{
		id: "setting",
		list: ListSettingData,
	},
];

const FooterPrimaryData = [
	{
		title: "정보",
		link: "/",
	},
	{
		title: "보도자료",
		link: "/",
	},
	{
		title: "저작권",
		link: "/",
	},
	{
		title: "문의하기",
		link: "/",
	},
	{
		title: "크리에이터",
		link: "/",
	},
	{
		title: "광고",
		link: "/",
	},
	{
		title: "개발자",
		link: "/",
	},
];

const FooterSecondaryData = [
	{
		title: "약관",
		link: "/",
	},
	{
		title: "개인정보처리방침",
		link: "/",
	},
	{
		title: "정책 및 안전",
		link: "/",
	},
	{
		title: "WeTube 작동의 원리",
		link: "/",
	},
	{
		title: "새로운 기능 테스트하기",
		link: "/",
	},
];

export const SidebarFooterData = [
	{
		title: "primary",
		list: FooterPrimaryData,
	},
	{
		title: "secondary",
		list: FooterSecondaryData,
	},
];
