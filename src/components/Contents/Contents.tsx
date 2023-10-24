import { useState } from "react";

import { HeaderMoreIcon } from "@/constants/Icon/icon";

import {
	ContentLayout,
	ContentRowDiv,
	RowInnerDiv,
	VideoItemDiv,
	VideoItemInnerDiv,
	ThumbnailDiv,
	ImgDiv,
	OverlayDiv,
	ProgressFullDiv,
	ProgressLiveDiv,
	TimeStampDiv,
	DetailInfoDiv,
	ProfileDiv,
	TextDiv,
	MenuDiv,
} from "./Contents.styles";

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

const Contents = () => {
	const [optionMenuHoverIndex, setOptionMenuHoverIndex] = useState<
		number | null
	>(null);

	const handleOption = (num: number) =>
		setOptionMenuHoverIndex((prev) => (prev === num ? null : num));

	return (
		<ContentLayout>
			<ContentRowDiv>
				{count.map((count) => (
					<RowInnerDiv key={count}>
						{mockItems.map((data) => (
							<VideoItemDiv key={data.postId}>
								<VideoItemInnerDiv>
									<ThumbnailDiv>
										<a href={`/detail/${data.postId}`}>
											<ImgDiv>
												<img src={data.postVideoThumbnail} alt="img" />
											</ImgDiv>
											<OverlayDiv>
												<ProgressFullDiv>
													<ProgressLiveDiv />
												</ProgressFullDiv>
												<TimeStampDiv>
													<span>{data.postVideoTime}</span>
												</TimeStampDiv>
											</OverlayDiv>
										</a>
									</ThumbnailDiv>
									<DetailInfoDiv
										onMouseOver={() => {
											handleOption(data.postId);
										}}
									>
										<a href="/">
											<ProfileDiv>
												<img src={data.postOwnerThumbnail} alt="profile" />
											</ProfileDiv>
										</a>
										<TextDiv>
											<h3>
												<a href="/">{data.postTitle}</a>
											</h3>
											<h4>
												<a href="/">{data.postOwnerChannel}</a>
											</h4>
											<h4>
												<span>조회수 {data.postView}</span>
												<span>{data.postDate}</span>
											</h4>
										</TextDiv>
										<MenuDiv onHover={optionMenuHoverIndex === data.postId}>
											<HeaderMoreIcon size={24} color="#fff" />
										</MenuDiv>
									</DetailInfoDiv>
								</VideoItemInnerDiv>
							</VideoItemDiv>
						))}
					</RowInnerDiv>
				))}
			</ContentRowDiv>
		</ContentLayout>
	);
};

export default Contents;
