import {
	VideoInfoCardLayout,
	VideoInfoCardDiv,
	InnerDiv,
	TopDiv,
	TopTextDiv,
	BottomDiv,
	BottomInnerDiv,
	MoreButton,
} from "./VIdeoInfoCard.styles";

const VideoInfoCard = () => {
	return (
		<VideoInfoCardLayout>
			<VideoInfoCardDiv>
				<InnerDiv>
					<TopDiv>
						<TopTextDiv>
							<span dir="auto">조회수 11만회</span>
							<span dir="auto"> </span>
							<span dir="auto">1주 전</span>
						</TopTextDiv>
					</TopDiv>
					<BottomDiv>
						<BottomInnerDiv>
							<span>
								<a href="#">#미생</a>
							</span>
							<span> 영상 더보러 가기</span>
							<br />
							<br />
							<span>🎪 레전드 드라마 여기로! </span>
							<span>
								<a href="#">#레뜨로</a>
							</span>
							<span>&nbsp;</span>
							<span>...</span>
						</BottomInnerDiv>
						<MoreButton>...더보기</MoreButton>
					</BottomDiv>
				</InnerDiv>
			</VideoInfoCardDiv>
		</VideoInfoCardLayout>
	);
};

export default VideoInfoCard;
