import { useState, useEffect, useRef } from "react";

import { IndexIcon, HeaderMoreIcon } from "@/constants/Icon/icon";

import PlaylistMoreDropdown from "./PlaylistMoreDropdown/PlaylistMoreDropdown";
import {
	PlaylistVideoCardLayout,
	IndexDiv,
	IndexIconDiv,
	ContentDiv,
	ContentInnerDiv,
	ThumbnailDiv,
	OverlayDiv,
	ProgressFullDiv,
	ProgressLiveDiv,
	TimeStampDiv,
	InfoDiv,
	InfoMetaDiv,
	MenuDiv,
	IconDiv,
} from "./PlaylistVideoCard.styles";

interface infoType {
	id: number;
}

const PlaylistVideoCard = (info: infoType) => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [optionMenuHoverIndex, setOptionMenuHoverIndex] = useState<
		number | null
	>(null);

	const handleDropdown = (e: CustomEvent<MouseEvent>) => {
		const target = e.target as HTMLDivElement;

		if (!dropdownRef?.current?.contains(target)) {
			setIsDropdownOpen(false);
		}
	};

	const handleOption = (num: number) =>
		setOptionMenuHoverIndex((prev) => (prev === num ? null : num));

	useEffect(() => {
		if (isDropdownOpen) {
			window.addEventListener("click", handleDropdown as EventListener);

			document.body.style.overflow = "hidden";
		}

		return () => {
			window.removeEventListener("click", handleDropdown as EventListener);

			document.body.style.overflow = "";
		};
	}, [isDropdownOpen]);

	return (
		<PlaylistVideoCardLayout
			onMouseOver={() => {
				handleOption(info.id);
			}}
			onMouseOut={() => {
				setOptionMenuHoverIndex(null);
			}}
		>
			<IndexDiv>
				<IndexIconDiv>
					<IndexIcon />
				</IndexIconDiv>
			</IndexDiv>
			<ContentDiv>
				<ContentInnerDiv>
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
								[무박 n일🦉밤샘 방구석 여행🏝][섬] #2 올타임 레전드, 흑산도 |
								KBS 100117, 100124 방송
							</a>
						</h3>
						<InfoMetaDiv>
							<h4>
								<a href="#">user-김준식</a>
							</h4>
							<h4>조회수 384만회</h4>
							<h4>6년 전</h4>
						</InfoMetaDiv>
					</InfoDiv>
				</ContentInnerDiv>
			</ContentDiv>
			<MenuDiv ref={dropdownRef}>
				<IconDiv $showmenu={optionMenuHoverIndex === info.id}>
					<HeaderMoreIcon
						size={24}
						color="#fff"
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					/>
				</IconDiv>
				{isDropdownOpen && <PlaylistMoreDropdown />}
			</MenuDiv>
		</PlaylistVideoCardLayout>
	);
};

export default PlaylistVideoCard;
