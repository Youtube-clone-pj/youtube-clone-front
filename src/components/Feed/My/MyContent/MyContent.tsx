import { Link } from "react-router-dom";

import { RecordIcon, HeaderMoreIcon } from "@/constants/Icon/icon";

import {
	LayoutDiv,
	InnerDiv,
	SectionDiv,
	TitleDiv,
	TitleInnerDiv,
	ButtonDiv,
	ContentDiv,
	VideoListDiv,
	VideoCardDiv,
	ThumbnailDiv,
	OverlayDiv,
	ProgressLiveDiv,
	ProgressFullDiv,
	TimeStampDiv,
	InfoDiv,
	InfoInnerDiv,
	InfoMetaDiv,
	MenuDiv,
} from "./MyContent.styles";

const MyContent = () => {
	return (
		<LayoutDiv>
			<InnerDiv>
				<SectionDiv>
					<TitleDiv>
						<TitleInnerDiv>
							<h2>
								<Link to="/feed/history">
									<RecordIcon />
									기록
								</Link>
							</h2>
							<ButtonDiv>
								<button>모두 보기</button>
							</ButtonDiv>
						</TitleInnerDiv>
					</TitleDiv>
					<ContentDiv>
						<VideoListDiv>
							<VideoCardDiv>
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
									<InfoInnerDiv>
										<h3>
											<a href="#">
												[무박 n일🦉밤샘 방구석 여행🏝][섬] #2 올타임 레전드,
												흑산도 | KBS 100117, 100124 방송
											</a>
										</h3>
										<InfoMetaDiv>
											<h4>
												<a href="#">user-김준식</a>
											</h4>
											<h4>
												<span>조회수 384만회</span>
												<span>6년 전</span>
											</h4>
										</InfoMetaDiv>
									</InfoInnerDiv>
									<MenuDiv>
										<HeaderMoreIcon color="#fff" />
									</MenuDiv>
								</InfoDiv>
							</VideoCardDiv>
						</VideoListDiv>
					</ContentDiv>
				</SectionDiv>
			</InnerDiv>
		</LayoutDiv>
	);
};

export default MyContent;
