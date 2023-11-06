import {
	VideoSectionItemLayout,
	VideoSectionItemDiv,
	ThumbnailDiv,
	OverlayDiv,
	ProgressFullDiv,
	ProgressLiveDiv,
	TimeStampDiv,
	InfoDiv,
} from "./VideoSectionItem.styles";

const VideoSectionItem = () => {
	return (
		<VideoSectionItemLayout>
			<VideoSectionItemDiv>
				<ThumbnailDiv>
					<a href="#">
						<img
							src="https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw"
							alt="img"
						/>
						<OverlayDiv>
							<ProgressFullDiv>
								<ProgressLiveDiv />
							</ProgressFullDiv>
							<TimeStampDiv>
								<span>5:31:05</span>
							</TimeStampDiv>
						</OverlayDiv>
					</a>
				</ThumbnailDiv>
				<InfoDiv></InfoDiv>
			</VideoSectionItemDiv>
		</VideoSectionItemLayout>
	);
};

export default VideoSectionItem;
