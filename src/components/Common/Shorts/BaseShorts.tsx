import ShortsCard from "@/components/Shorts/ShortsCard";
import { ShortsIcon } from "@/constants/Icon/icon";

import { BaseShortsLayout, TitleDiv, VideoDiv } from "./BaseShorts.styles";

const mockItems = [
	{
		shortsId: 1,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/WoriIh2alI4/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDUkLzpzAt_syLaEtkelS-mGRKloQ",
	},
	{
		shortsId: 2,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/WoriIh2alI4/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDUkLzpzAt_syLaEtkelS-mGRKloQ",
	},
	{
		shortsId: 3,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/WoriIh2alI4/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDUkLzpzAt_syLaEtkelS-mGRKloQ",
	},
	{
		shortsId: 4,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/WoriIh2alI4/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDUkLzpzAt_syLaEtkelS-mGRKloQ",
	},
	{
		shortsId: 5,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/WoriIh2alI4/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDUkLzpzAt_syLaEtkelS-mGRKloQ",
	},
	{
		shortsId: 6,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/WoriIh2alI4/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLDUkLzpzAt_syLaEtkelS-mGRKloQ",
	},
];

const BaseShorts = () => {
	return (
		<BaseShortsLayout>
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
		</BaseShortsLayout>
	);
};

export default BaseShorts;
