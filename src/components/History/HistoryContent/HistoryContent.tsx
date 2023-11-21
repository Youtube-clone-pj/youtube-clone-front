import { ShortsIcon } from "@/constants/Icon/icon";

import {
	HistoryContentLayout,
	TitleDiv,
	ContentDiv,
	ShortsDiv,
	ShortsTitleDiv,
	ShortsVideoDiv,
	VideoInnerDiv,
	ScrollDiv,
	ScrollInnerDiv,
} from "./HistoryContent.styles";
import HistoryShorts from "./HistoryShorts";

const mockItems = [
	{
		shortsId: 1,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/rG0SkPsqWUE/oardefault.jpg?…IhCcAHAAQY=&rs=AOn4CLDswiW2-44RnPSBaIYgs90lD4-mPw",
	},
	{
		shortsId: 2,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/rG0SkPsqWUE/oardefault.jpg?…IhCcAHAAQY=&rs=AOn4CLDswiW2-44RnPSBaIYgs90lD4-mPw",
	},
	{
		shortsId: 3,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/rG0SkPsqWUE/oardefault.jpg?…IhCcAHAAQY=&rs=AOn4CLDswiW2-44RnPSBaIYgs90lD4-mPw",
	},
	{
		shortsId: 4,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/rG0SkPsqWUE/oardefault.jpg?…IhCcAHAAQY=&rs=AOn4CLDswiW2-44RnPSBaIYgs90lD4-mPw",
	},
	{
		shortsId: 5,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/rG0SkPsqWUE/oardefault.jpg?…IhCcAHAAQY=&rs=AOn4CLDswiW2-44RnPSBaIYgs90lD4-mPw",
	},
	{
		shortsId: 6,
		shortsTitle: "shorts 비디오 제목",
		shortsView: "11만회",
		shortsVideoThumbnail:
			"https://i.ytimg.com/vi/rG0SkPsqWUE/oardefault.jpg?…IhCcAHAAQY=&rs=AOn4CLDswiW2-44RnPSBaIYgs90lD4-mPw",
	},
];

const HistoryContent = () => {
	return (
		<HistoryContentLayout>
			<TitleDiv>오늘</TitleDiv>
			<ContentDiv>
				<ShortsDiv>
					<ShortsTitleDiv>
						<h2>
							<ShortsIcon />
							Shorts
						</h2>
					</ShortsTitleDiv>
					<ShortsVideoDiv>
						<VideoInnerDiv>
							<ScrollDiv>
								<ScrollInnerDiv>
									{mockItems.map((cardData) => (
										<HistoryShorts {...cardData} key={cardData.shortsId} />
									))}
								</ScrollInnerDiv>
							</ScrollDiv>
						</VideoInnerDiv>
					</ShortsVideoDiv>
				</ShortsDiv>
			</ContentDiv>
		</HistoryContentLayout>
	);
};

export default HistoryContent;
