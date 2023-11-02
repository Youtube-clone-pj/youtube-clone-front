import {
	LikeIcon,
	DisLikeIcon,
	ShareIcon,
	MoreIcon,
} from "@/constants/Icon/icon";

import {
	VideoTitleLayout,
	VideoTitleDiv,
	TopDiv,
	ProfileDiv,
	ProfileInfoDiv,
	SubscribeButtonDiv,
	ButtonDiv,
	ButtonInnerDiv,
	LikeButtonDiv,
	LikeButton,
	DisLikeButton,
	ShareButton,
	MoreButton,
} from "./VideoTitle.styles";

const VideoTitle = () => {
	return (
		<VideoTitleLayout>
			<VideoTitleDiv>
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
							<LikeButtonDiv>
								<LikeButton>
									<LikeIcon size={22} color="#fff" />
									2.7천
								</LikeButton>
								<DisLikeButton>
									<DisLikeIcon size={22} color="#fff" />
								</DisLikeButton>
							</LikeButtonDiv>
							<ShareButton>
								<ShareIcon size={22} color="#fff" />
								공유
							</ShareButton>
							<MoreButton>
								<MoreIcon size={22} color="#fff" />
							</MoreButton>
						</ButtonInnerDiv>
					</ButtonDiv>
				</TopDiv>
			</VideoTitleDiv>
		</VideoTitleLayout>
	);
};

export default VideoTitle;
