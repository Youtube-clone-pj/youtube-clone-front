import { useState, useEffect, useRef } from "react";

import { CommentSortIcon } from "@/constants/Icon/icon";

import SortDropdown from "./SortDropdown/SortDropdown";
import {
	VideoCommentLayout,
	TopDiv,
	TitleDiv,
	SortDiv,
	BottomDiv,
} from "./VideoComment.styles";

const VideoComment = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

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
		<VideoCommentLayout>
			<TopDiv>
				<TitleDiv>
					<h2>댓글 152개</h2>
					<SortDiv
						ref={dropdownRef}
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					>
						<CommentSortIcon />
						<h3>정렬 기준</h3>
						{isDropdownOpen && <SortDropdown />}
					</SortDiv>
				</TitleDiv>
			</TopDiv>
			<BottomDiv></BottomDiv>
		</VideoCommentLayout>
	);
};

export default VideoComment;
