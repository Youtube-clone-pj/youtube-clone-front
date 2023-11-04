import VideoComment from "./VideoComment/VideoComment.tsx";
import { VideoDetailLayout, VideoInfoDiv } from "./VideoDetail.styles.ts";
import VideoInfoCard from "./VideoInfoCard/VideoInfoCard.tsx";
import VideoTitle from "./VideoTitle/VideoTitle.tsx";

const VideoDetail = () => {
	return (
		<VideoDetailLayout>
			<VideoInfoDiv>
				<VideoTitle />
				<VideoInfoCard />
			</VideoInfoDiv>
			<VideoComment />
		</VideoDetailLayout>
	);
};

export default VideoDetail;
