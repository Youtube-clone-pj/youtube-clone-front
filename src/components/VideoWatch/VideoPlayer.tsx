import Video from "@/assets/video/test2.mp4";

import VideoControls from "./VideoControls";
import {
	VideoPlayerLayout,
	VideoPlayerDiv,
	VideoContainerDiv,
	ContainerInnerDiv,
} from "./VideoPlayer.styles";

const VideoPlayer = () => {
	return (
		<VideoPlayerLayout>
			<VideoPlayerDiv>
				<VideoContainerDiv>
					<ContainerInnerDiv>
						<video src={Video} />
						<VideoControls />
					</ContainerInnerDiv>
				</VideoContainerDiv>
			</VideoPlayerDiv>
		</VideoPlayerLayout>
	);
};

export default VideoPlayer;
