import VideoSectionItem from "./VideoSectionItem/VideoSectionItem";
import {
	VideoSectionListLayout,
	VideoSectionListDiv,
} from "./VideoSectionList.styles";

const VideoSectionList = () => {
	return (
		<VideoSectionListLayout>
			<VideoSectionListDiv>
				<VideoSectionItem />
				<VideoSectionItem />
			</VideoSectionListDiv>
		</VideoSectionListLayout>
	);
};

export default VideoSectionList;
