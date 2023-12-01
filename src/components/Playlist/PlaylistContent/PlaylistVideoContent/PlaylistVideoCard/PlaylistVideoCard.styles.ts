import styled from "styled-components";

export const PlaylistVideoCardLayout = styled.div`
	display: flex;
	align-items: center;
	border-radius: 12px;
`;

export const IndexDiv = styled.div`
	display: flex;
	align-items: center;
	cursor: grab;
`;

export const IndexIconDiv = styled.div`
	padding: 0 6px;
	display: flex;
	justify-content: center;
	align-items: center;

	& > svg {
		width: 24px;
		height: 24px;
	}
`;

export const ContentDiv = styled.div`
	padding: 8px 0;
	cursor: pointer;
	min-width: 0;
	display: flex;
	flex: 1;
	flex-basis: 1e-9px;
`;

export const ContentInnerDiv = styled.div`
	min-width: 0;
	flex-basis: 368px;
	flex-grow: 1;
	display: flex;
	gap: 8px;
`;

export const ThumbnailDiv = styled.div`
	width: 160px;
	height: 90px;
	position: relative;

	& > a {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border-radius: 8px;
		height: 100%;
		overflow: hidden;

		& > img {
			width: 100%;
			height: 100%;
		}
	}
`;

export const OverlayDiv = styled.div``;

export const ProgressFullDiv = styled.div`
	background-color: ${({ theme: { colors } }) => colors.gray_primary};
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	height: 4px;
	z-index: 1;
`;

export const ProgressLiveDiv = styled.div`
	width: 10%;
	background-color: ${({ theme: { colors } }) => colors.red_primary};
	height: 100%;
`;

export const TimeStampDiv = styled.div`
	border-radius: 4px;
	background-color: ${({ theme: { colors } }) => colors.black_alpha_80};
	color: ${({ theme: { colors } }) => colors.white};
	position: absolute;
	right: 0;
	bottom: 0;
	padding: 3px 4px;
	margin: 4px;
	line-height: 1.2rem;
	letter-spacing: 0.5px;
	height: 12px;
	font-size: 0.8rem;
	display: inline-flex;
	align-items: center;

	& > span {
		max-height: 1.2rem;
		overflow: hidden;
	}
`;
