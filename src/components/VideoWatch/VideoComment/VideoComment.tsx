import { useState, useEffect, useRef } from "react";

import { CommentSortIcon } from "@/constants/Icon/icon";

import SortDropdown from "./SortDropdown/SortDropdown";
import {
	VideoCommentLayout,
	TopDiv,
	TitleDiv,
	SortDiv,
	BottomDiv,
	BottomInnerDiv,
	ProfileDiv,
	CommentDiv,
	CommentInputDiv,
	CommentButtonDiv,
	ButtonInnerDiv,
} from "./VideoComment.styles";

const VideoComment = () => {
	const dropdownRef = useRef<HTMLDivElement>(null);

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const [isInputClick, setIsInputClick] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

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

			<BottomDiv>
				<BottomInnerDiv>
					<ProfileDiv>
						<a href="#">
							<img
								src="https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj"
								alt="profile"
							/>
						</a>
					</ProfileDiv>
					<CommentDiv>
						<CommentInputDiv>
							<form>
								<input
									type="text"
									placeholder="댓글 추가..."
									onClick={() => setIsInputClick(true)}
									onChange={handleInputValue}
								/>
							</form>
						</CommentInputDiv>
						<CommentButtonDiv $isclick={isInputClick}>
							<ButtonInnerDiv>
								<button
									className="cancel"
									onClick={() => setIsInputClick(false)}
								>
									취소
								</button>
								<button
									className={inputValue === "" ? "comment" : "comment active"}
								>
									댓글
								</button>
							</ButtonInnerDiv>
						</CommentButtonDiv>
					</CommentDiv>
				</BottomInnerDiv>
			</BottomDiv>
		</VideoCommentLayout>
	);
};

export default VideoComment;
