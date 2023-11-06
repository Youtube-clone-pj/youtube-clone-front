import VideoDetail from "./VideoDetail/VideoDetail";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import { VideoPrimaryLayout, VideoPrimaryDiv } from "./VideoPrimary.styles";

const VideoPrimary = () => {
	return (
		<VideoPrimaryLayout>
			<VideoPrimaryDiv>
				<VideoPlayer />
				<VideoDetail />
			</VideoPrimaryDiv>
		</VideoPrimaryLayout>
	);
};

export default VideoPrimary;
