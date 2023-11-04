import styled from "styled-components";

export const CommentLayout = styled.div`
	display: flex;
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

export const ContentDiv = styled.div`
	display: flex;
	flex: 1 1;
	flex-basis: 1e-9px;
	flex-direction: column;
	gap: 4px;
`;

export const HeaderDiv = styled.div`
	display: flex;

	& > h3 > a {
		color: ${({ theme: { colors } }) => colors.white_primary};
		display: block;
		font-size: 0.95rem;
		font-weight: 500;
		line-height: 1.4rem;
		margin-bottom: 2px;
		margin-right: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	& > h4 {
		color: ${({ theme: { colors } }) => colors.gray};
		font-family: Roboto, Arial, sans-serif;
		font-size: 0.8rem;
		line-height: 1.4rem;
		white-space: nowrap;
	}
`;

export const CommentTextDiv = styled.div`
	width: 100%;
	overflow: auto;

	& > button {
		color: ${({ theme: { colors } }) => colors.gray};
		font-family: Roboto, Arial, sans-serif;
		font-size: 0.9rem;
		font-weight: 500;
		line-height: 1.5rem;
		text-transform: none;
		margin-top: 4px;
		display: inline-block;
		cursor: pointer;
	}

	& > .disabled {
		display: none;
	}
`;

export const TextDiv = styled.div<{ $ismore: boolean }>`
	display: ${({ $ismore }) => ($ismore ? "block" : "-webkit-box")};
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	color: ${({ theme: { colors } }) => colors.white_primary};
	max-height: none;
	overflow: hidden;
	font-family: Roboto, Arial, sans-serif;
	font-size: 0.9rem;
	line-height: 1.5rem;
	overflow-wrap: anywhere;
	white-space: pre-wrap;

	& > span > a {
		color: ${({ theme: { colors } }) => colors.blue_primary};
	}
`;

export const ContentButtonDiv = styled.div`
	display: flex;
	align-items: center;

	& > button {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border-radius: 50%;

		&:hover {
			background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
		}
	}

	& > span {
		color: ${({ theme: { colors } }) => colors.gray};
		font-family: Roboto, Arial, sans-serif;
		font-size: 0.8rem;
		font-weight: 500;
		line-height: 1.4rem;
		text-transform: uppercase;
		margin-right: 8px;
	}

	& > .reply {
		color: ${({ theme: { colors } }) => colors.white_primary};
		font-size: 12px;
		height: 32px;
		padding: 0 6px;
		border-radius: 16px;
		margin-left: 2px;
	}
`;

export const OptionButtonDiv = styled.div`
	& > button {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
`;
