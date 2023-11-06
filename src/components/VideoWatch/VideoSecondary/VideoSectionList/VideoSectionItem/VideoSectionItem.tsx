import { useState } from "react";

import { HeaderMoreIcon } from "@/constants/Icon/icon";

import {
	VideoSectionItemLayout,
	VideoSectionItemDiv,
	ThumbnailDiv,
	OverlayDiv,
	ProgressFullDiv,
	ProgressLiveDiv,
	TimeStampDiv,
	InfoDiv,
	InfoMetaDiv,
	OptionButtonDiv,
} from "./VideoSectionItem.styles";

const VideoSectionItem = () => {
	const [optionMenuOpenIndex, setOptionMenuOpenIndex] = useState<number | null>(
		null,
	);

	const handleOption = (num: number) => {
		setOptionMenuOpenIndex((prev) => (prev === num ? null : num));
	};

	return (
		<VideoSectionItemLayout
			onMouseOver={() => {
				handleOption(1);
			}}
			onMouseOut={() => {
				setOptionMenuOpenIndex(null);
			}}
		>
			<VideoSectionItemDiv>
				<ThumbnailDiv>
					<a href="#">
						<img
							src="https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw"
							alt="img"
						/>
						<OverlayDiv>
							<ProgressFullDiv>
								<ProgressLiveDiv />
							</ProgressFullDiv>
							<TimeStampDiv>
								<span>5:31:05</span>
							</TimeStampDiv>
						</OverlayDiv>
					</a>
				</ThumbnailDiv>
				<InfoDiv>
					<h3>
						<a href="#">
							<span>
								[광고없는] 🎧인기 국내힙합 노래 모음 (2022) / 신나는 국힙
								플레이리스트 🎧 춤추면서들을수있는 신나는 힙합믹스🎧 2022 Korean
								Best Hip-Hop Songs
							</span>
						</a>
					</h3>
					<InfoMetaDiv>
						<h4>
							<a href="#">user-김준식</a>
						</h4>
						<h5>
							<span>조회수 48만회</span>
							<span>10개월 전</span>
						</h5>
					</InfoMetaDiv>
				</InfoDiv>
				<OptionButtonDiv>
					<button>
						{optionMenuOpenIndex && <HeaderMoreIcon size={24} color="#fff" />}
					</button>
				</OptionButtonDiv>
			</VideoSectionItemDiv>
		</VideoSectionItemLayout>
	);
};

export default VideoSectionItem;
