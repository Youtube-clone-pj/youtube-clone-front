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

export const DropdownDiv = styled.div`
	position: absolute;
	left: 0;
	top: 40px;
	z-index: 50;
`;

export const DropdownInnerDiv = styled.div`
	border-radius: 8px;
	max-height: 122px;
	max-width: 98px;
	width: 98px;
	height: 122px;
	position: relative;

	& > ul {
		background-color: #212121;
		color: #f1f1f1;
		border-radius: 12px;
		overflow: hidden;
		padding: 8px 0;

		& > li {
			cursor: pointer;
			-webkit-font-smoothing: antialiased;
			align-items: center;
			display: flex;
			font-family: Roboto, Noto, sans-serif;
			font-size: 14px;
			line-height: 24px;
			min-height: 48px;
			padding: 0 16px;
			position: relative;
		}

		& > .active {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
`;

export const BottomDiv = styled.div``;
