import {
	VideoSectionItemLayout,
	VideoSectionItemDiv,
	ThumbnailDiv,
	OverlayDiv,
	ProgressFullDiv,
	ProgressLiveDiv,
	TimeStampDiv,
	InfoDiv,
	InfoMetaDiv,
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
				<InfoDiv>
					<a href="#">
						<h3>
							<span>
								[광고없는] 🎧인기 국내힙합 노래 모음 (2022) / 신나는 국힙
								플레이리스트 🎧 춤추면서들을수있는 신나는 힙합믹스🎧 2022 Korean
								Best Hip-Hop Songs
							</span>
						</h3>
						<InfoMetaDiv>
							<h4>
								<a href="#">user-김준식</a>
							</h4>
							<h5>
								<span>조회수 48만회</span>
								<span>10개월 전</span>
							</h5>
						</InfoMetaDiv>
					</a>
				</InfoDiv>
			</VideoSectionItemDiv>
		</VideoSectionItemLayout>
	);
};

export default VideoSectionItem;
