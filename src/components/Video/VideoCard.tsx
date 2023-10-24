import { useState } from "react";

import { HeaderMoreIcon } from "@/constants/Icon/icon";

import {
	VideoCardLayout,
	CardInnerDiv,
	ThumbnailDiv,
	ImgDiv,
	OverlayDiv,
	ProgressFullDiv,
	ProgressLiveDiv,
	TimeStampDiv,
	DetailInfoDiv,
	ProfileDiv,
	TextDiv,
	MenuDiv,
} from "./VideoCard.styles";
import { videoCardType } from "./VideoList";

const VideoCard = (cardData: videoCardType) => {
	const [optionMenuHoverIndex, setOptionMenuHoverIndex] = useState<
		number | null
	>(null);

	const handleOption = (num: number) =>
		setOptionMenuHoverIndex((prev) => (prev === num ? null : num));

	return (
		<VideoCardLayout>
			<CardInnerDiv>
				<ThumbnailDiv>
					<a href={`/detail/${cardData.postId}`}>
						<ImgDiv>
							<img src={cardData.postVideoThumbnail} alt="img" />
						</ImgDiv>
						<OverlayDiv>
							<ProgressFullDiv>
								<ProgressLiveDiv />
							</ProgressFullDiv>
							<TimeStampDiv>
								<span>{cardData.postVideoTime}</span>
							</TimeStampDiv>
						</OverlayDiv>
					</a>
				</ThumbnailDiv>
				<DetailInfoDiv
					onMouseOver={() => {
						handleOption(cardData.postId);
					}}
					onMouseOut={() => {
						setOptionMenuHoverIndex(null);
					}}
				>
					<a href="/">
						<ProfileDiv>
							<img src={cardData.postOwnerThumbnail} alt="profile" />
						</ProfileDiv>
					</a>
					<TextDiv>
						<h3>
							<a href="/">{cardData.postTitle}</a>
						</h3>
						<h4>
							<a href="/">{cardData.postOwnerChannel}</a>
						</h4>
						<h4>
							<span>조회수 {cardData.postView}</span>
							<span>{cardData.postDate}</span>
						</h4>
					</TextDiv>
					<MenuDiv $showmenu={optionMenuHoverIndex === cardData.postId}>
						<HeaderMoreIcon size={24} color="#fff" />
					</MenuDiv>
				</DetailInfoDiv>
			</CardInnerDiv>
		</VideoCardLayout>
	);
};

export default VideoCard;
