import styled from "styled-components";

export const BaseShortsLayout = styled.div`
	margin-bottom: 48px;
	padding-bottom: 17px;
	position: relative;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_alpha_20};
`;

export const TitleDiv = styled.div`
	margin: 0 0 24px 8px;

	& > h2 {
		display: flex;
		align-items: center;
		gap: 8px;
		color: ${({ theme: { colors } }) => colors.white_primary};
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
