import styled from "styled-components";

export const PlaylistLayout = styled.div`
	padding-top: 24px;
	display: flex;
	flex-direction: column;
	flex: 1;
	flex-basis: 1e-9px;
`;

export const PlaylistSideDiv = styled.div`
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

export const SideInnerDiv = styled.div`
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
