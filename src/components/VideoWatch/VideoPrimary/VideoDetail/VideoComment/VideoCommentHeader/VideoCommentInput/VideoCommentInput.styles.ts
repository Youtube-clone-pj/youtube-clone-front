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
		border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray_primary};
		color: ${({ theme: { colors } }) => colors.white_primary};

		&:focus {
			border-bottom: 1px solid
				${({ theme: { colors } }) => colors.white_primary};
		}

		&::placeholder {
			color: ${({ theme: { colors } }) => colors.gray_secondary};
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
		color: ${({ theme: { colors } }) => colors.white_primary};
		cursor: pointer;

		&:hover {
			background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
		}
	}

	& > .comment {
		background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
		color: ${({ theme: { colors } }) => colors.gray_primary};
		cursor: default;
	}

	& > .active {
		background-color: ${({ theme: { colors } }) => colors.blue_primary};
		color: ${({ theme: { colors } }) => colors.black_primary};
	}
`;
