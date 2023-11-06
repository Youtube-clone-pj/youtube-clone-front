import {
	VideoSecondaryLayout,
	VideoSecondaryDiv,
} from "./VideoSecondary.styles";
import VideoSectionList from "./VideoSectionList/VideoSectionList";
import VideoTagbar from "./VideoTagbar/VideoTagbar";

const VideoSecondary = () => {
	return (
		<VideoSecondaryLayout>
			<VideoSecondaryDiv>
				<VideoTagbar />
				<VideoSectionList />
			</VideoSecondaryDiv>
		</VideoSecondaryLayout>
	);
};

export default VideoSecondary;
