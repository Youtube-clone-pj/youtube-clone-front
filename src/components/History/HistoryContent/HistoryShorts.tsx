import { useState } from "react";

import { shortsCardType } from "@/components/Shorts/ShortsList";
import { HeaderMoreIcon } from "@/constants/Icon/icon";

import {
	HistoryShortsLayout,
	HistoryShortsInnerDiv,
	ThumbnailDiv,
	ImgDiv,
	DetailInfoDiv,
	MenuDiv,
} from "./HistoryShorts.styles";

const HistoryShorts = (cardData: shortsCardType) => {
	const [optionMenuHoverIndex, setOptionMenuHoverIndex] = useState<
		number | null
	>(null);

	const handleOption = (num: number) =>
		setOptionMenuHoverIndex((prev) => (prev === num ? null : num));

	return (
		<HistoryShortsLayout>
			<HistoryShortsInnerDiv>
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
			</HistoryShortsInnerDiv>
		</HistoryShortsLayout>
	);
};

export default HistoryShorts;
