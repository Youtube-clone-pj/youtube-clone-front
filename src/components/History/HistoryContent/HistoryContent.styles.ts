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
