import VideoPrimary from "./VideoPrimary/VideoPrimary";
import VideoSecondary from "./VideoSecondary/VideoSecondary";
import { VideoWatchLayout, VideoWatchDiv } from "./VideoWatch.styles";

const VideoWatch = () => {
	return (
		<VideoWatchLayout>
			<VideoWatchDiv>
				<VideoPrimary />
				<VideoSecondary />
			</VideoWatchDiv>
		</VideoWatchLayout>
	);
};

export default VideoWatch;
