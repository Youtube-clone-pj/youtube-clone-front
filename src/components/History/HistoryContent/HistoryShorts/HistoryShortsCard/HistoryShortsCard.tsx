import { useState } from "react";

import { shortsCardType } from "@/components/Shorts/ShortsList";
import { HeaderMoreIcon } from "@/constants/Icon/icon";

import {
	HistoryShortsCardLayout,
	HistoryShortsCardInnerDiv,
	ThumbnailDiv,
	ImgDiv,
	DetailInfoDiv,
	MenuDiv,
} from "./HistoryShortsCard.styles";

const HistoryShortsCard = (cardData: shortsCardType) => {
	const [optionMenuHoverIndex, setOptionMenuHoverIndex] = useState<
		number | null
	>(null);

	const handleOption = (num: number) =>
		setOptionMenuHoverIndex((prev) => (prev === num ? null : num));

	return (
		<HistoryShortsCardLayout>
			<HistoryShortsCardInnerDiv>
				<ThumbnailDiv>
					<a href={`/shorts/${cardData.shortsId}`}>
						<ImgDiv>
							<img src={cardData.shortsVideoThumbnail} alt="img" />
						</ImgDiv>
					</a>
				</ThumbnailDiv>
				<DetailInfoDiv
					onMouseOver={() => {
						handleOption(cardData.shortsId);
					}}
					onMouseOut={() => {
						setOptionMenuHoverIndex(null);
					}}
				>
					<h3>
						<a href="#">{cardData.shortsTitle}</a>
					</h3>
					<h4>조회수 {cardData.shortsView}</h4>
					<MenuDiv $showmenu={optionMenuHoverIndex === cardData.shortsId}>
						<HeaderMoreIcon size={24} color="#fff" />
					</MenuDiv>
				</DetailInfoDiv>
			</HistoryShortsCardInnerDiv>
		</HistoryShortsCardLayout>
	);
};

export default HistoryShortsCard;
