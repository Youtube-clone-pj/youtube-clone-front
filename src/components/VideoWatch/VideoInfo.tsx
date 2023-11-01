import { LikeIcon, DisLikeIcon } from "@/constants/Icon/icon";

import {
	VideoInfoLayout,
	VideoInfoDiv,
	TopDiv,
	ProfileDiv,
	ProfileInfoDiv,
	SubscribeButtonDiv,
	ButtonDiv,
	ButtonInnerDiv,
	ButtonWrapperDiv,
	LikeButton,
	DisLikeButton,
} from "./VideoInfo.styles";

const VideoInfo = () => {
	return (
		<VideoInfoLayout>
			<VideoInfoDiv>
				<h1>비디오 포스트 제목</h1>
				<TopDiv>
					<ProfileDiv>
						<a href="/">
							<img
								src="https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj"
								alt="postOwner"
							/>
						</a>
						<ProfileInfoDiv>
							<a href="#">
								<h3>비디오 포스트 채널</h3>
							</a>
							<h4>구독자 11.1만명</h4>
						</ProfileInfoDiv>
						<SubscribeButtonDiv>
							<button>구독</button>
						</SubscribeButtonDiv>
					</ProfileDiv>
					<ButtonDiv>
						<ButtonInnerDiv>
							<ButtonWrapperDiv>
								<LikeButton>
									<LikeIcon size={24} color="#fff" />
									2.7천
								</LikeButton>
								<DisLikeButton>
									<DisLikeIcon size={24} color="#fff" />
								</DisLikeButton>
							</ButtonWrapperDiv>
						</ButtonInnerDiv>
					</ButtonDiv>
				</TopDiv>
			</VideoInfoDiv>
		</VideoInfoLayout>
	);
};

export default VideoInfo;
