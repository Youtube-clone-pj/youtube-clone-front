import VideoPlayer from "./VideoPlayer";
import {
	VideoWatchLayout,
	VideoWatchDiv,
	PrimaryDiv,
	PrimaryInnerDiv,
	SecondaryDiv,
} from "./VideoWatch.styles";

const VideoWatch = () => {
	return (
		<VideoWatchLayout>
			<VideoWatchDiv>
				<PrimaryDiv>
					<PrimaryInnerDiv>
						<VideoPlayer />
					</PrimaryInnerDiv>
				</PrimaryDiv>
				<SecondaryDiv />
			</VideoWatchDiv>
		</VideoWatchLayout>
	);
};

export default VideoWatch;
