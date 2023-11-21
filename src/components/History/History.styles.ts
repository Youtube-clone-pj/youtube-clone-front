import styled from "styled-components";

export const HistoryLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	flex-basis: 1e-9px;
	overflow: hidden;
`;

export const TitleDiv = styled.div`
	width: 100%;
	flex: none;
`;

export const TitleInnerDiv = styled.div`
	padding: 24px calc(50% - 642px) 4px;

	& > h1 {
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 36px;
		line-height: 50px;
		font-weight: ${({ theme: { font } }) => font.weight.black};
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		white-space: normal;
		color: ${({ theme: { colors } }) => colors.white_primary};
	}
`;

export const ContentDiv = styled.div`
	max-width: 1284px;
	width: 1284px;
`;

export const ContentInnerDiv = styled.div`
	padding-right: 442px;
	flex: 1;
	flex-basis: 1e-9px;
	max-width: 100%;
`;
