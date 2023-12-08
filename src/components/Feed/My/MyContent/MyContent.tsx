import { Link } from "react-router-dom";

import {
	SideRecordIcon,
	SideLaterShowIcon,
	PlaylistIcon,
	SideLikeVideoIcon,
} from "@/constants/Icon/icon";

import {
	LayoutDiv,
	InnerDiv,
	SectionDiv,
	TitleDiv,
	TitleInnerDiv,
	ButtonDiv,
	ContentDiv,
	VideoListDiv,
} from "./MyContent.styles";
import MyContentVideoCard from "../MyContentVideoCard/MyContentVideoCard";

const sectionMockItems = [
	{
		title: "기록",
		icon: <SideRecordIcon />,
	},
	{
		title: "나중에 볼 동영상",
		icon: <SideLaterShowIcon />,
	},
	{
		title: "재생목록",
		icon: <PlaylistIcon />,
	},
	{
		title: "좋아요 표시한 동영상",
		icon: <SideLikeVideoIcon />,
	},
];

const mockItems = [
	{
		id: 1,
	},
	{
		id: 2,
	},
	{
		id: 3,
	},
	{
		id: 4,
	},
	{
		id: 5,
	},
	{
		id: 6,
	},
	{
		id: 7,
	},
	{
		id: 8,
	},
	{
		id: 9,
	},
	{
		id: 10,
	},
	{
		id: 11,
	},
	{
		id: 12,
	},
	{
		id: 13,
	},
];

const MyContent = () => {
	return (
		<LayoutDiv>
			<InnerDiv>
				{sectionMockItems.map((data) => (
					<SectionDiv key={data.title}>
						<TitleDiv>
							<TitleInnerDiv>
								<h2>
									<Link to="/feed/history">
										{data.icon}
										{data.title}
									</Link>
								</h2>
								<ButtonDiv>
									<button>모두 보기</button>
								</ButtonDiv>
							</TitleInnerDiv>
						</TitleDiv>
						<ContentDiv>
							<VideoListDiv>
								{mockItems.map((info) => (
									<MyContentVideoCard id={info.id} key={info.id} />
								))}
							</VideoListDiv>
						</ContentDiv>
					</SectionDiv>
				))}
			</InnerDiv>
		</LayoutDiv>
	);
};

export default MyContent;
