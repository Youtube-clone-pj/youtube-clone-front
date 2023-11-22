import { CloseIcon, HeaderMoreIcon } from "@/constants/Icon/icon";

import {
	HistoryVideoLayout,
	HistoryVideoDiv,
	ThumbnailDiv,
	OverlayDiv,
	ProgressFullDiv,
	ProgressLiveDiv,
	TimeStampDiv,
	InfoDiv,
	TitleDiv,
	MenuDiv,
	InfoMetaDiv,
	TextP,
} from "./HistoryVideo.styles";

const HistoryVideo = () => {
	return (
		<HistoryVideoLayout>
			<HistoryVideoDiv>
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
					<TitleDiv>
						<h3>
							<a href="#">제목 예시</a>
						</h3>
						<MenuDiv>
							<button type="button">
								<CloseIcon size={24} color="#fff" />
							</button>
							<button type="button">
								<HeaderMoreIcon size={24} color="#fff" />
							</button>
						</MenuDiv>
					</TitleDiv>
					<InfoMetaDiv>
						<h4>
							<a href="#">user-김준식</a>
						</h4>
						<h4>조회수 48만회</h4>
					</InfoMetaDiv>
					<TextP>
						#응답하라1994 #깜찍한혼종 #Diggle Let's giggle, :Diggle! 더 많은
						꿀잼 영상은? ▶️ tvN D CLASSIC : https://bit.ly/2KT666f
					</TextP>
				</InfoDiv>
			</HistoryVideoDiv>
		</HistoryVideoLayout>
	);
};

export default HistoryVideo;
