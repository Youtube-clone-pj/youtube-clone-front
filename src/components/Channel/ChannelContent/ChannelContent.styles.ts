import styled from "styled-components";

export const ChannelContentLayout = styled.div`
	min-height: calc(100vh - 120px);
	max-width: 1284px;
	margin: 0 auto;
	font-family: "Roboto", "Arial", sans-serif;
`;

export const ChannelContentDiv = styled.div`
	margin: 96px 0 56px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	flex: 1;
	flex-basis: 1e-9px;
	gap: 12px;
`;

export const ImgDiv = styled.div`
	& > img {
		width: 147px;
		height: 147px;
	}
`;

export const TextDiv = styled.div`
	width: 528px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > h2 {
		margin-bottom: 8px;
		color: ${({ theme: { colors } }) => colors.white_primary};
		font-size: 14px;
		line-height: 20px;
		font-weight: ${({ theme: { font } }) => font.weight.medium};
	}

	& > p {
		margin-bottom: 24px;
		color: ${({ theme: { colors } }) => colors.white_primary};
		font-size: 14px;
		line-height: 20px;
		width: 315px;
	}

	& > button {
		color: ${({ theme: { colors } }) => colors.black_primary};
		background-color: ${({ theme: { colors } }) => colors.white_primary};
		padding: 0 16px;
		height: 36px;
		font-size: 14px;
		line-height: 36px;
		border-radius: 18px;
		cursor: pointer;
	}
`;
