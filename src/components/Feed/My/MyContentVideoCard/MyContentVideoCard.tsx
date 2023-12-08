import { useState } from "react";

import { HeaderMoreIcon } from "@/constants/Icon/icon";

import {
	LayoutDiv,
	ThumbnailDiv,
	OverlayDiv,
	ProgressLiveDiv,
	ProgressFullDiv,
	TimeStampDiv,
	InfoDiv,
	InfoInnerDiv,
	InfoMetaDiv,
	MenuDiv,
} from "./MyContentVideoCard.styles";

interface videoCardProp {
	id: number;
}

const MyContentVideoCard = ({ id }: videoCardProp) => {
	const [optionMenuHoverIndex, setOptionMenuHoverIndex] = useState<
		number | null
	>(null);

	const handleOption = (num: number) =>
		setOptionMenuHoverIndex((prev) => (prev === num ? null : num));

	return (
		<LayoutDiv
			onMouseOver={() => {
				handleOption(id);
			}}
			onMouseOut={() => {
				setOptionMenuHoverIndex(null);
			}}
		>
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
				<InfoInnerDiv>
					<h3>
						<a href="#">
							[무박 n일🦉밤샘 방구석 여행🏝][섬] #2 올타임 레전드, 흑산도 | KBS
							100117, 100124 방송
						</a>
					</h3>
					<InfoMetaDiv>
						<h4>
							<a href="#">user-김준식</a>
						</h4>
						<h4>
							<span>조회수 384만회</span>
							<span>6년 전</span>
						</h4>
					</InfoMetaDiv>
				</InfoInnerDiv>
				<MenuDiv>
					{optionMenuHoverIndex === id && <HeaderMoreIcon color="#fff" />}
				</MenuDiv>
			</InfoDiv>
		</LayoutDiv>
	);
};

export default MyContentVideoCard;
