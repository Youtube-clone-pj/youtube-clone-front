import styled from "styled-components";

export const ChannelBioLayout = styled.div`
	padding: 16px calc(50% - 642px) 0;
`;

export const TopDiv = styled.div`
	max-width: 1284px;
	display: flex;
	align-items: center;
	gap: 24px;
	margin-bottom: 12px;
`;

export const ProfileDiv = styled.div`
	cursor: pointer;

	& > a > img {
		width: 160px;
		height: 160px;
		border-radius: 50%;
	}
`;

export const InfoDiv = styled.div`
	display: flex;
	flex: 1;
	flex-basis: 1e-9px;
	flex-direction: column;
`;

export const BioDiv = styled.div`
	width: 100%;
	font-family: "Roboto", "Arial", sans-serif;

	& > h2 {
		font-size: 36px;
		line-height: 50px;
		font-weight: 700;
		overflow: hidden;
		max-height: 10rem;
		-webkit-line-clamp: 2;
		display: box;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		white-space: normal;
		color: ${({ theme: { colors } }) => colors.white_primary};
	}

	& > h3 {
		color: ${({ theme: { colors } }) => colors.gray};
		font-size: 14px;
		line-height: 20px;
	}

	& > p {
		max-width: 600px;
		padding: 10px 0;
		color: var(--yt-spec-text-secondary);
		color: ${({ theme: { colors } }) => colors.gray};
		font-size: 14px;
		line-height: 20px;
		overflow: hidden;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export const ButtonDiv = styled.div`
	padding: 6px 0;
	display: flex;
	gap: 8px;

	& > button {
		color: ${({ theme: { colors } }) => colors.white_primary};
		background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
		padding: 0 16px;
		height: 36px;
		font-size: 14px;
		line-height: 36px;
		border-radius: 18px;
		cursor: pointer;
	}
`;
