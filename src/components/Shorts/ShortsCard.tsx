import { useState } from "react";

import { HeaderMoreIcon } from "@/constants/Icon/icon";

import { shortsCardType } from "./Shorts";
import {
	ShortsCardLayout,
	CardInnerDiv,
	ThumbnailDiv,
	ImgDiv,
	DetailInfoDiv,
	MenuDiv,
} from "./ShortsCard.styles";

const ShortsCard = (cardData: shortsCardType) => {
	const [optionMenuHoverIndex, setOptionMenuHoverIndex] = useState<
		number | null
	>(null);

	const handleOption = (num: number) =>
		setOptionMenuHoverIndex((prev) => (prev === num ? null : num));

	return (
		<ShortsCardLayout>
			<CardInnerDiv>
				<ThumbnailDiv>
					<a href="/">
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
						<a href="/">{cardData.shortsTitle}</a>
					</h3>
					<h4>조회수 {cardData.shortsView}</h4>
					<MenuDiv $showmenu={optionMenuHoverIndex === cardData.shortsId}>
						<HeaderMoreIcon size={24} color="#fff" />
					</MenuDiv>
				</DetailInfoDiv>
			</CardInnerDiv>
		</ShortsCardLayout>
	);
};

export default ShortsCard;
