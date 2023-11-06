import { useState, useEffect, useRef } from "react";

import { CommentSortIcon } from "@/constants/Icon/icon";

import SortDropdown from "./SortDropdown/SortDropdown";
import {
	VideoCommentTitleLayout,
	TitleDiv,
	SortDiv,
} from "./VideoCommentTitle.styles";

const VideoCommentTitle = () => {
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
		<VideoCommentTitleLayout>
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
		</VideoCommentTitleLayout>
	);
};

export default VideoCommentTitle;
