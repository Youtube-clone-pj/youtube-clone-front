import { ShortsIcon } from "@/constants/Icon/icon";

import ShortsCard from "./ShortsCard";
import {
	ShortsListLayout,
	ShortsListRowDiv,
	RowInnerDiv,
	TitleDiv,
	VideoDiv,
} from "./ShortsList.styles";

export interface shortsCardType {
	shortsId: number;
	shortsTitle: string;
	shortsView: string;
	shortsVideoThumbnail: string;
}

const mockItems = [
	{
		shortsId: 1,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/tb-eWlv10cg/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLCbhhzozYbrghoXyoG-o0rz3xofIw",
	},
	{
		shortsId: 2,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/tb-eWlv10cg/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLCbhhzozYbrghoXyoG-o0rz3xofIw",
	},
	{
		shortsId: 3,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/tb-eWlv10cg/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLCbhhzozYbrghoXyoG-o0rz3xofIw",
	},
	{
		shortsId: 4,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/tb-eWlv10cg/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLCbhhzozYbrghoXyoG-o0rz3xofIw",
	},
	{
		shortsId: 5,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/tb-eWlv10cg/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLCbhhzozYbrghoXyoG-o0rz3xofIw",
	},
	{
		shortsId: 6,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/tb-eWlv10cg/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBoQAhgGIAE4AUAB&rs=AOn4CLCbhhzozYbrghoXyoG-o0rz3xofIw",
	},
];

const ShortsList = () => {
	return (
		<ShortsListLayout>
			<ShortsListRowDiv>
				<RowInnerDiv>
					<TitleDiv>
						<h2>
							<ShortsIcon />
							Shorts
						</h2>
					</TitleDiv>
					<VideoDiv>
						{mockItems.map((cardData) => (
							<ShortsCard {...cardData} key={cardData.shortsId} />
						))}
					</VideoDiv>
				</RowInnerDiv>
			</ShortsListRowDiv>
		</ShortsListLayout>
	);
};

export default ShortsList;
