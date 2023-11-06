import {
	VideoSecondaryLayout,
	VideoSecondaryDiv,
} from "./VideoSecondary.styles";
import VideoTagbar from "./VideoTagbar/VideoTagbar";

const VideoSecondary = () => {
	return (
		<VideoSecondaryLayout>
			<VideoSecondaryDiv>
				<VideoTagbar />
			</VideoSecondaryDiv>
		</VideoSecondaryLayout>
	);
};

export default VideoSecondary;
