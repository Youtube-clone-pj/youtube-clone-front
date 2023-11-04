import { useState } from "react";

import {
	VideoCommentInputLayout,
	VideoCommentInputDiv,
	ProfileDiv,
	CommentDiv,
	CommentInputDiv,
	CommentButtonDiv,
	ButtonInnerDiv,
} from "./VideoCommentInput.styles";

const VideoCommentInput = () => {
	const [isInputClick, setIsInputClick] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<VideoCommentInputLayout>
			<VideoCommentInputDiv>
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
							<button className="cancel" onClick={() => setIsInputClick(false)}>
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
			</VideoCommentInputDiv>
		</VideoCommentInputLayout>
	);
};

export default VideoCommentInput;
