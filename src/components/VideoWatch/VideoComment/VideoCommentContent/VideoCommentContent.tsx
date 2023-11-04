import { useState } from "react";

import { ReplyLessIcon, ReplyMoreIcon } from "@/constants/Icon/icon";

import Comment from "./Comment/Comment";
import {
	VideoCommentContentLayout,
	VideoCommentDiv,
	ReplyDiv,
	ReplyButtonDiv,
} from "./VideoCommentContent.styles";

const VideoCommentContent = () => {
	const [isReplyMore, setIsReplyMore] = useState(false);

	return (
		<VideoCommentContentLayout>
			<VideoCommentDiv>
				<Comment reply={false} />
				<ReplyDiv>
					<ReplyButtonDiv>
						<button onClick={() => setIsReplyMore(!isReplyMore)}>
							{isReplyMore ? (
								<ReplyLessIcon size={18} color="#3ea6ff" />
							) : (
								<ReplyMoreIcon size={18} color="#3ea6ff" />
							)}
							<span>답글 42개</span>
						</button>
					</ReplyButtonDiv>
					{isReplyMore && <Comment reply={true} />}
				</ReplyDiv>
			</VideoCommentDiv>
		</VideoCommentContentLayout>
	);
};

export default VideoCommentContent;
