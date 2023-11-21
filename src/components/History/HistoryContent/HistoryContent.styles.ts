import styled from "styled-components";

export const HistoryContentLayout = styled.div``;

export const TitleDiv = styled.div`
	font-family: "Roboto", "Arial", sans-serif;
	font-size: 20px;
	line-height: 28px;
	font-weight: ${({ theme: { font } }) => font.weight.bold};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: normal;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	color: ${({ theme: { colors } }) => colors.white_primary};
	padding: 24px 0 8px;
`;

export const ContentDiv = styled.div``;

export const ShortsDiv = styled.div`
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_alpha_20};
	display: flex;
	flex-direction: column;
`;

export const ShortsTitleDiv = styled.div`
	margin-top: 24px;

	& > h2 {
		display: flex;
		align-items: center;
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 20px;
		line-height: 28px;
		font-weight: ${({ theme: { font } }) => font.weight.bold};
		gap: 8px;
		color: ${({ theme: { colors } }) => colors.white_primary};

		& > svg {
			width: 24px;
			height: 24px;
		}
	}
`;

export const ShortsVideoDiv = styled.div`
	margin-top: 24px;
`;

export const VideoInnerDiv = styled.div`
	position: relative;
`;

export const ScrollDiv = styled.div`
	overflow: hidden;
`;

export const ScrollInnerDiv = styled.div`
	margin-bottom: 24px;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.05, 0, 0, 1);
	will-change: transform;
	display: inline-block;
	white-space: nowrap;
`;
