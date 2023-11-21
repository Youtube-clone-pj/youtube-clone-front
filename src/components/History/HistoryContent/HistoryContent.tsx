import { useState, useEffect, useRef } from "react";

import { LeftArrowIcon, ShortsIcon } from "@/constants/Icon/icon";
import { RightArrowIcon } from "@/constants/Icon/icon";

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
	LeftArrowDiv,
	RightArrowDiv,
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
	const parentRef = useRef<HTMLDivElement>(null);
	const childRef = useRef<HTMLDivElement>(null);

	const [disablePrevButton, setDisablePrevButton] = useState(false);
	const [disableNextButton, setDisableNextButton] = useState(false);

	const [currentWidth, setCurrentWidth] = useState(0);
	const [widthGap, setWidthGap] = useState<number | undefined>();

	const handlePrevButton = () => {
		if (currentWidth > 0) {
			setCurrentWidth((prevWidth) => prevWidth - 856);
		}
	};

	const handleNextButton = () => {
		const maxWidth = childRef?.current?.clientWidth;
		const width = parentRef?.current?.clientWidth;
		if (maxWidth && width) {
			setWidthGap(maxWidth - width);
			setCurrentWidth((nextWidth) => nextWidth + 856);
		}
	};

	useEffect(() => {
		if (widthGap && currentWidth > widthGap) {
			setDisableNextButton(true);
		} else {
			setDisableNextButton(false);
		}
		if (currentWidth > 0) {
			setDisablePrevButton(false);
		} else {
			setDisablePrevButton(true);
		}
	}, [currentWidth, widthGap]);

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
							{!disablePrevButton && (
								<LeftArrowDiv onClick={handlePrevButton}>
									<button>
										<LeftArrowIcon size={24} color="#fff" />
									</button>
								</LeftArrowDiv>
							)}
							<ScrollDiv ref={parentRef}>
								<ScrollInnerDiv
									ref={childRef}
									style={{
										transform:
											widthGap && currentWidth > widthGap
												? `translateX(-${widthGap}px)`
												: `translateX(-${currentWidth}px)`,
									}}
								>
									{mockItems.map((cardData) => (
										<HistoryShorts {...cardData} key={cardData.shortsId} />
									))}
								</ScrollInnerDiv>
							</ScrollDiv>
							{!disableNextButton && (
								<RightArrowDiv onClick={handleNextButton}>
									<button>
										<RightArrowIcon size={24} color="#fff" />
									</button>
								</RightArrowDiv>
							)}
						</VideoInnerDiv>
					</ShortsVideoDiv>
				</ShortsDiv>
			</ContentDiv>
		</HistoryContentLayout>
	);
};

export default HistoryContent;
