import styled from "styled-components";

export const VideoCommentContentLayout = styled.div`
	margin-top: 30px;
`;

export const VideoCommentDiv = styled.div`
	margin-bottom: 16px;
`;

export const ReplyDiv = styled.div`
	margin-left: 56px;
	font-family: Roboto, Arial, sans-serif;
	font-weight: 500;
	text-transform: none;
`;

export const ReplyButtonDiv = styled.div`
	display: inline-flex;
	align-items: center;
	margin-bottom: 10px;

	& > button {
		background-color: transparent;
		color: ${({ theme: { colors } }) => colors.blue_primary};
		border-radius: 18px;
		cursor: pointer;
		display: flex;
		align-items: center;
		font-size: 14px;
		font-weight: 500;
		height: 36px;
		justify-content: center;
		line-height: 36px;
		padding: 0 16px;

		&:hover {
			background-color: rgb(42, 56, 78);
		}

		& > span {
			margin-left: 12px;
		}
	}
`;
