import { useState, useEffect, useRef } from "react";

import {
	PlayFillIcon,
	HeaderMoreIcon,
	ShuffleIcon,
} from "@/constants/Icon/icon";

import MoreButtonDropdown from "./MoreButtonDropdown/MoreButtonDropdown";
import {
	PlaylistSidebarLayout,
	PlayListSidebarDiv,
	GradientDiv,
	GradientImgDiv,
	GradientBackgroundDiv,
	ContentDiv,
	ContentInnerDiv,
	ThumbnailDiv,
	ThumbnailImgDiv,
	ImgInnerDiv,
	OverlayDiv,
	OverlayInnerDiv,
	InfoDiv,
	InfoDetailDiv,
	InfoMetaDiv,
	InfoMoreButtonDiv,
	ActionButtonDiv,
	ButtonDiv,
	ButtonRightDiv,
} from "./PlaylistSidebar.styles";

const PlaylistSidebar = () => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdown = (e: CustomEvent<MouseEvent>) => {
		const target = e.target as HTMLDivElement;

		if (!dropdownRef?.current?.contains(target)) {
			setIsDropdownOpen(false);
		}
	};

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
		<PlaylistSidebarLayout>
			<PlayListSidebarDiv>
				<GradientDiv>
					<GradientImgDiv>
						<img
							src="https://i.ytimg.com/vi/reWmTMg34Vc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBxQocI87aahh8J6PNVgI6hI-uDKQ"
							alt="img"
						/>
					</GradientImgDiv>
					<GradientBackgroundDiv />
				</GradientDiv>
				<ContentDiv>
					<ContentInnerDiv>
						<a href="#">
							<ThumbnailDiv>
								<ThumbnailImgDiv>
									<ImgInnerDiv>
										<img
											src="https://i.ytimg.com/vi/reWmTMg34Vc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBxQocI87aahh8J6PNVgI6hI-uDKQ"
											alt="img"
										/>
									</ImgInnerDiv>
									<OverlayDiv>
										<OverlayInnerDiv>
											<PlayFillIcon />
											<span>모두 재생</span>
										</OverlayInnerDiv>
									</OverlayDiv>
								</ThumbnailImgDiv>
							</ThumbnailDiv>
						</a>
						<InfoDiv>
							<h1>나중에 볼 동영상</h1>
							<InfoDetailDiv>
								<h2>
									<a href="#">김준식</a>
								</h2>
								<InfoMetaDiv>
									<span>동영상 3개</span>
									<span>조회수 없음</span>
									<span>어제 업데이트됨</span>
								</InfoMetaDiv>
							</InfoDetailDiv>
							<InfoMoreButtonDiv
								ref={dropdownRef}
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							>
								<button>
									<HeaderMoreIcon />
								</button>
								{isDropdownOpen && <MoreButtonDropdown />}
							</InfoMoreButtonDiv>
							<ActionButtonDiv>
								<ButtonDiv>
									<button>
										<a href="#">
											<PlayFillIcon />
											<span>모두 재생</span>
										</a>
									</button>
								</ButtonDiv>
								<ButtonRightDiv>
									<button>
										<a href="#">
											<ShuffleIcon />
											<span>셔플</span>
										</a>
									</button>
								</ButtonRightDiv>
							</ActionButtonDiv>
						</InfoDiv>
					</ContentInnerDiv>
				</ContentDiv>
			</PlayListSidebarDiv>
		</PlaylistSidebarLayout>
	);
};

export default PlaylistSidebar;
