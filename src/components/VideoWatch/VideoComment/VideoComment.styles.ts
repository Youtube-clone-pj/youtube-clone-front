import styled from "styled-components";

export const VideoCommentLayout = styled.div``;

export const TopDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 24px 0 32px;
	gap: 24px;
`;

export const TitleDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 32px;
	color: #f1f1f1;
	font-family: Roboto, Arial, sans-serif;
	cursor: pointer;

	& > h2 {
		font-size: 20px;
		line-height: 28px;
	}
`;

export const SortDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	position: relative;

	& > h3 {
		font-size: 14px;
		line-height: 22px;
	}
`;

export const BottomDiv = styled.div``;
