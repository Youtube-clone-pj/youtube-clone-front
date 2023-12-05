import VideoCard from "./VideoCard";
import {
	VideoListLayout,
	VidoeListRowDiv,
	RowInnerDiv,
} from "./VideoList.styles";

export interface videoCardType {
	postId: number;
	postTitle: string;
	postView: string;
	postDate: string;
	postVideoThumbnail: string;
	postVideoTime: string;
	postOwnerChannel: string;
	postOwnerThumbnail: string;
}

export type videListProp = {
	mt: boolean;
};

const count = [1, 2, 3, 4];

const mockItems = [
	{
		postId: 1,
		postTitle: "비디오 포스트 제목",
		postView: "11만회",
		postDate: "1주전",
		postVideoThumbnail:
			"https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw",
		postVideoTime: "5:31:05",
		postOwnerChannel: "비디오 포스트 채널",
		postOwnerThumbnail:
			"https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj",
	},
	{
		postId: 2,
		postTitle: "비디오 포스트 제목",
		postView: "11만회",
		postDate: "1주전",
		postVideoThumbnail:
			"https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw",
		postVideoTime: "5:31:05",
		postOwnerChannel: "비디오 포스트 채널",
		postOwnerThumbnail:
			"https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj",
	},
	{
		postId: 3,
		postTitle: "비디오 포스트 제목",
		postView: "11만회",
		postDate: "1주전",
		postVideoThumbnail:
			"https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw",
		postVideoTime: "5:31:05",
		postOwnerChannel: "비디오 포스트 채널",
		postOwnerThumbnail:
			"https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj",
	},
	{
		postId: 4,
		postTitle: "비디오 포스트 제목",
		postView: "11만회",
		postDate: "1주전",
		postVideoThumbnail:
			"https://i.ytimg.com/vi/hUM_v2B2Vpo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWU5gZxe5fYEo-baUeZYOB8426tw",
		postVideoTime: "5:31:05",
		postOwnerChannel: "비디오 포스트 채널",
		postOwnerThumbnail:
			"https://yt3.ggpht.com/JvXwi2zyrNnKLdVjp5MIYEakcH5RHWKDIajrPAcCHYjeWFsgNS3az_eX8BT8a8YhjbXiDX-UJQ=s68-c-k-c0x00ffffff-no-rj",
	},
];

const VideoList = ({ mt }: videListProp) => {
	return (
		<VideoListLayout mt={mt}>
			<VidoeListRowDiv>
				{count.map((count) => (
					<RowInnerDiv key={count}>
						{mockItems.map((cardData) => (
							<VideoCard {...cardData} key={cardData.postId} />
						))}
					</RowInnerDiv>
				))}
			</VidoeListRowDiv>
		</VideoListLayout>
	);
};

export default VideoList;
