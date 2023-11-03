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

export const BottomInnerDiv = styled.div`
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
