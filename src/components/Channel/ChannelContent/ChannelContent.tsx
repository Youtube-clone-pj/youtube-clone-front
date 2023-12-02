import {
	ChannelContentLayout,
	ChannelContentDiv,
	ImgDiv,
	TextDiv,
} from "./ChannelContent.styles";

const ChannelContent = () => {
	return (
		<ChannelContentLayout>
			<ChannelContentDiv>
				<ImgDiv>
					<img
						src="https://www.gstatic.com/youtube/img/channels/core_channel_no_activity_dark.svg"
						alt="channelImg"
					/>
				</ImgDiv>
				<TextDiv>
					<h2>원하는 기기에서 콘텐츠를 만드세요</h2>
					<p>
						집에서는 물론 이동 중에도 녹화하고 업로드할 수 있습니다. 공개 상태로
						설정한 모든 콘텐츠가 여기에 표시됩니다.
					</p>
					<button>만들기</button>
				</TextDiv>
			</ChannelContentDiv>
		</ChannelContentLayout>
	);
};

export default ChannelContent;
