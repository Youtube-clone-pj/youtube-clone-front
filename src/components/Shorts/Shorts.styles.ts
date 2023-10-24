import styled from "styled-components";

export const ShortsLayout = styled.div`
	width: 100%;
	background-color: #0f0f0f;
`;

export const ShortsRowDiv = styled.div`
	margin: 0 24px;
`;

export const RowInnerDiv = styled.div`
	margin-bottom: 48px;
	padding-bottom: 17px;
	position: relative;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const TitleDiv = styled.div`
	margin: 0 0 24px 8px;

	& > h2 {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #f1f1f1;
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 20px;
		line-height: 28px;

		& > svg {
			width: 24px;
			height: 24px;
		}
	}
`;

export const VideoDiv = styled.div`
	margin: 0 -8px;
	display: flex;
	flex-wrap: wrap;
`;
