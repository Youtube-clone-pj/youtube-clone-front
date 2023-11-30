import {
	PlaylistLayout,
	PlaylistSideDiv,
	SideInnerDiv,
	GradientDiv,
	GradientImgDiv,
	GradientBackgroundDiv,
	ContentDiv,
	ContentInnerDiv,
	ThumbnailDiv,
	ThumbnailImgDiv,
	ImgInnerDiv,
} from "./Playlist.styles";

const Playlist = () => {
	return (
		<PlaylistLayout>
			<PlaylistSideDiv>
				<SideInnerDiv>
					<GradientDiv>
						<GradientImgDiv>
							<img
								src="https://i.ytimg.com/vi/reWmTMg34Vc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBxQocI87aahh8J6PNVgI6hI-uDKQ"
								alt="img"
							/>
						</GradientImgDiv>
						<GradientBackgroundDiv />
					</GradientDiv>
					<ContentDiv>
						<ContentInnerDiv>
							<a href="#">
								<ThumbnailDiv>
									<ThumbnailImgDiv>
										<ImgInnerDiv>
											<img
												src="https://i.ytimg.com/vi/reWmTMg34Vc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBxQocI87aahh8J6PNVgI6hI-uDKQ"
												alt="img"
											/>
										</ImgInnerDiv>
									</ThumbnailImgDiv>
								</ThumbnailDiv>
							</a>
						</ContentInnerDiv>
					</ContentDiv>
				</SideInnerDiv>
			</PlaylistSideDiv>
		</PlaylistLayout>
	);
};

export default Playlist;
