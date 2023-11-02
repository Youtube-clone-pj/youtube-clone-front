import { VideoDetailLayout } from "./VideoDetail.styles.ts";
import VideoInfoCard from "./VideoInfoCard/VideoInfoCard.tsx";
import VideoTitle from "./VideoTitle.tsx";

const VideoDetail = () => {
	return (
		<VideoDetailLayout>
			<VideoTitle />
			<VideoInfoCard />
		</VideoDetailLayout>
	);
};

export default VideoDetail;
