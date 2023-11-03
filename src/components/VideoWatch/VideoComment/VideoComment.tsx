import { useState } from "react";

import { CommentSortIcon } from "@/constants/Icon/icon";

import {
	VideoCommentLayout,
	TopDiv,
	TitleDiv,
	SortDiv,
	DropdownDiv,
	DropdownInnerDiv,
	BottomDiv,
} from "./VideoComment.styles";

const VideoComment = () => {
	const [sortOption, setSortOption] = useState("인기 댓글순");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<VideoCommentLayout>
			<TopDiv>
				<TitleDiv>
					<h2>댓글 152개</h2>
					<SortDiv onClick={handleDropdown}>
						<CommentSortIcon />
						<h3>정렬 기준</h3>
						{isDropdownOpen && (
							<DropdownDiv>
								<DropdownInnerDiv>
									<ul>
										<li
											onClick={() => setSortOption("인기 댓글순")}
											className={sortOption === "인기 댓글순" ? "active" : ""}
										>
											<a href="">인기 댓글순</a>
										</li>
										<li
											onClick={() => setSortOption("최신순")}
											className={sortOption === "최신순" ? "active" : ""}
										>
											<a href="">최신순</a>
										</li>
									</ul>
								</DropdownInnerDiv>
							</DropdownDiv>
						)}
					</SortDiv>
				</TitleDiv>
			</TopDiv>
			<BottomDiv></BottomDiv>
		</VideoCommentLayout>
	);
};

export default VideoComment;
