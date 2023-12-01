import { IndexIcon } from "@/constants/Icon/icon";

import {
	PlaylistVideoCardLayout,
	IndexDiv,
	IndexIconDiv,
	ContentDiv,
	ContentInnerDiv,
	ThumbnailDiv,
	OverlayDiv,
	ProgressFullDiv,
	ProgressLiveDiv,
	TimeStampDiv,
} from "./PlaylistVideoCard.styles";

const PlaylistVideoCard = () => {
	return (
		<PlaylistVideoCardLayout>
			<IndexDiv>
				<IndexIconDiv>
					<IndexIcon />
				</IndexIconDiv>
			</IndexDiv>
			<ContentDiv>
				<ContentInnerDiv>
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
				</ContentInnerDiv>
			</ContentDiv>
		</PlaylistVideoCardLayout>
	);
};

export default PlaylistVideoCard;
