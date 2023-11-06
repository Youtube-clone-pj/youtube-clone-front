import styled from "styled-components";

export const VideoSectionItemLayout = styled.div`
	margin-top: 16px;
`;

export const VideoSectionItemDiv = styled.div`
	display: flex;
	width: 100%;
	gap: 8px;
`;

export const ThumbnailDiv = styled.div`
	width: 168px;
	position: relative;

	& > a {
		height: 94px;

		& > img {
			width: 100%;
			height: 100%;
			border-radius: 8px;
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

export const InfoDiv = styled.div``;
