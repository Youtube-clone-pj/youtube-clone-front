import { useState, useEffect, useRef } from "react";

import { TagbarData } from "@/constants/data/TagbarData";
import { LeftArrowIcon, RightArrowIcon } from "@/constants/Icon/icon";

import {
	VideoTagbarLayout,
	VideoTagbarDiv,
	ScrollDiv,
	ScrollInnerDiv,
	TagItemDiv,
	LeftButtonDiv,
	RightButtonDiv,
} from "./VideoTagbar.styles";

const VideoTagbar = () => {
	const parentRef = useRef<HTMLDivElement>(null);
	const childRef = useRef<HTMLDivElement>(null);

	const [disablePrevButton, setDisablePrevButton] = useState(false);
	const [disableNextButton, setDisableNextButton] = useState(false);

	const [tag, setTag] = useState("전체");

	const [currentWidth, setCurrentWidth] = useState(0);
	const [widthGap, setWidthGap] = useState<number | undefined>();

	const handlePrevButton = () => {
		if (currentWidth > 0) {
			setCurrentWidth((prevWidth) => prevWidth - 160);
		}
	};

	const handleNextButton = () => {
		setCurrentWidth((nextWidth) => nextWidth + 160);
	};

	useEffect(() => {
		const maxWidth = childRef?.current?.clientWidth;
		const width = parentRef?.current?.clientWidth;
		if (maxWidth && width) {
			setWidthGap(maxWidth - width);
		}
	});

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
		<VideoTagbarLayout>
			<VideoTagbarDiv>
				{!disablePrevButton && (
					<LeftButtonDiv onClick={handlePrevButton}>
						<button>
							<LeftArrowIcon size={24} color="#fff" />
						</button>
					</LeftButtonDiv>
				)}
				<ScrollDiv
					className={
						disablePrevButton
							? "right"
							: disableNextButton
							  ? "left"
							  : "gradient"
					}
					ref={parentRef}
				>
					<ScrollInnerDiv
						ref={childRef}
						style={{
							transform:
								widthGap && currentWidth > widthGap
									? `translateX(-${widthGap}px)`
									: `translateX(-${currentWidth}px)`,
						}}
					>
						{TagbarData.map((info) => (
							<TagItemDiv
								key={info.title}
								onClick={() => setTag(info.title)}
								$active={tag === info.title}
							>
								<span>{info.title}</span>
							</TagItemDiv>
						))}
					</ScrollInnerDiv>
				</ScrollDiv>
				{!disableNextButton && (
					<RightButtonDiv onClick={handleNextButton}>
						<button>
							<RightArrowIcon size={24} color="#fff" />
						</button>
					</RightButtonDiv>
				)}
			</VideoTagbarDiv>
		</VideoTagbarLayout>
	);
};

export default VideoTagbar;
