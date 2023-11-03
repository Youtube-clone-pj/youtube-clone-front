import styled from "styled-components";

export const VideoCommentInputLayout = styled.div``;

export const VideoCommentInputDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: 16px;
	gap: 16px;
`;

export const ProfileDiv = styled.div`
	width: 40px;
	height: 40px;

	& > a > img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
`;

export const CommentDiv = styled.div`
	cursor: text;
	flex: 1 1;
	flex-basis: 1e-9px;
	padding-bottom: 4px;
`;

export const CommentInputDiv = styled.div`
	padding-bottom: 8px;

	& > form > input {
		width: 100%;
		background: transparent;
		border: none;
		outline: none;
		height: 24px;
		border-bottom: 1px solid #717171;
		color: #f1f1f1;

		&:focus {
			border-bottom: 1px solid #f1f1f1;
		}

		&::placeholder {
			color: rgb(128, 128, 128);
			font-size: 14px;
		}
	}
`;

export const CommentButtonDiv = styled.div<{ $isclick: boolean }>`
	display: ${({ $isclick }) => ($isclick ? "flex" : "none")};
	align-items: center;
	justify-content: flex-end;
`;

export const ButtonInnerDiv = styled.div`
	display: flex;
	gap: 8px;

	& > button {
		font-size: 14px;
		font-weight: 500;
		font-family: Roboto, Arial, sans-serif;
		border-radius: 18px;
		height: 36px;
		line-height: 36px;
		padding: 0 16px;
	}

	& > .cancel {
		background-color: transparent;
		color: #f1f1f1;
		cursor: pointer;

		&:hover {
			background-color: rgba(255, 255, 255, 0.2);
		}
	}

	& > .comment {
		background-color: rgba(255, 255, 255, 0.1);
		color: #717171;
		cursor: default;
	}

	& > .active {
		background-color: #3ea6ff;
		color: #0f0f0f;
	}
`;
