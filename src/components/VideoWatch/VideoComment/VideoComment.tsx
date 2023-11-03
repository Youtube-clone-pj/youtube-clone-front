import { VideoCommentLayout } from "./VideoComment.styles";
import VideoCommentContent from "./VideoCommentContent/VideoCommentContent";
import VideoCommentHeader from "./VideoCommentHeader/VideoCommentHeader";

const VideoComment = () => {
	return (
		<VideoCommentLayout>
			<VideoCommentHeader />
			<VideoCommentContent />
		</VideoCommentLayout>
	);
};

export default VideoComment;
