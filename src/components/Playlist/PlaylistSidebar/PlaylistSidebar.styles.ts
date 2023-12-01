import styled from "styled-components";

export const PlaylistSidebarLayout = styled.div`
	margin-left: 24px;
	height: calc(100vh - 80px);
	position: fixed;
	left: 240px;
	display: flex;
	flex-direction: column;
	width: 360px;
	overflow: hidden;
	color: ${({ theme: { colors } }) => colors.white};
`;

export const PlayListSidebarDiv = styled.div`
	display: flex;
	flex: 1;
	padding: 24px;
	margin-bottom: 24px;
	border-radius: 16px;
	position: relative;
	overflow-y: hidden;
`;

export const GradientDiv = styled.div`
	background-color: #654b3b;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
`;

export const GradientImgDiv = styled.div`
	width: 200%;
	transform: translateX(-25%);
	opacity: 0.7;
	filter: blur(30px);

	& > img {
		width: 100%;
		height: auto;
	}
`;

export const GradientBackgroundDiv = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: linear-gradient(
		to bottom,
		rgba(101, 75, 59, 0.8) 0%,
		rgba(101, 75, 59, 0.298) 33%,
		rgba(15, 15, 15, 1) 100%
	);
`;

export const ContentDiv = styled.div`
	flex: 1;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const ContentInnerDiv = styled.div`
	display: flex;
	flex-direction: column;

	& > a {
		cursor: pointer;
	}
`;

export const ThumbnailDiv = styled.div`
	margin-bottom: 16px;
`;

export const ThumbnailImgDiv = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	border-radius: 12px;
	overflow: hidden;
`;

export const ImgInnerDiv = styled.div`
	width: 312px;
	height: 176px;
	display: inline-block;

	& > img {
		display: block;
		max-width: 100%;
	}
`;

export const OverlayDiv = styled.div``;

export const OverlayInnerDiv = styled.div`
	opacity: 0;
	color: ${({ theme: { colors } }) => colors.white};
	background-color: ${({ theme: { colors } }) => colors.black_alpha_80};
	transition: opacity 0.3s;
	z-index: 1;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Roboto", "Arial", sans-serif;
	font-size: 12px;
	line-height: 18px;
	font-weight: ${({ theme: { font } }) => font.weight.medium};

	&:hover {
		opacity: 1;
	}

	& > svg {
		width: 24px;
		height: 24px;
	}
`;

export const InfoDiv = styled.div`
	min-width: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
	color: ${({ theme: { colors } }) => colors.white};
	z-index: 2;

	& > h1 {
		font-weight: ${({ theme: { font } }) => font.weight.bold};
		font-family: "YouTube Sans", "Roboto", sans-serif;
		font-size: 28px;
		line-height: 38px;
	}
`;

export const InfoDetailDiv = styled.div`
	display: flex;
	flex-direction: column;

	& > h2 {
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 14px;
		line-height: 20px;
		font-weight: ${({ theme: { font } }) => font.weight.medium};
		overflow: hidden;
		-webkit-line-clamp: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		white-space: normal;
		margin-bottom: 4px;
	}
`;

export const InfoMetaDiv = styled.div`
	font-family: "Roboto", "Arial", sans-serif;
	font-size: 12px;
	line-height: 18px;
	overflow: hidden;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	white-space: normal;
	color: ${({ theme: { colors } }) => colors.white_alpha_70};

	& > span {
		margin-right: 4px;
	}
`;

export const InfoMoreButtonDiv = styled.div`
	display: flex;
	align-items: center;

	& > button {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border-radius: 50%;
		background-color: ${({ theme: { colors } }) => colors.white_alpha_10};

		& > svg {
			width: 20px;
			height: 20px;
		}

		&:hover {
			background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
		}
	}
`;

export const ActionButtonDiv = styled.div`
	display: flex;
	gap: 8px;
	z-index: 2;
`;

export const ButtonDiv = styled.div`
	flex: 1;
	min-width: 0;
	display: flex;

	& > button {
		display: flex;
		flex: 1;
		flex-basis: 1e-9px;

		& > a {
			color: ${({ theme: { colors } }) => colors.black_03};
			background-color: ${({ theme: { colors } }) => colors.white};
			padding: 0 16px;
			height: 36px;
			font-size: 14px;
			line-height: 36px;
			border-radius: 18px;
			font-family: "Roboto", "Arial", sans-serif;
			font-weight: ${({ theme: { font } }) => font.weight.medium};
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			flex-basis: 1e-9px;
			gap: 6px;

			& > svg {
				width: 24px;
				height: 24px;
			}

			&:hover {
				background-color: ${({ theme: { colors } }) => colors.white_alpha_90};
			}
		}
	}
`;

export const ButtonRightDiv = styled(ButtonDiv)`
	& > button > a {
		background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
		color: ${({ theme: { colors } }) => colors.white};

		&:hover {
			background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
		}
	}
`;
