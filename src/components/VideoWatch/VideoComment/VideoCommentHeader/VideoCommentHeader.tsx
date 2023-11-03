import { VideoCommentHeaderLayout } from "./VideoCommentHeader.styles";
import VideoCommentInput from "./VideoCommentInput/VideoCommentInput";
import VideoCommentTitle from "./VideoCommentTitle/VideoCommentTitle";

const VideoCommentHeader = () => {
	return (
		<VideoCommentHeaderLayout>
			<VideoCommentTitle />
			<VideoCommentInput />
		</VideoCommentHeaderLayout>
	);
};

export default VideoCommentHeader;
