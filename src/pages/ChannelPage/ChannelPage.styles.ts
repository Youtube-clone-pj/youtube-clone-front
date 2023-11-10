import styled from "styled-components";

export const ChannelPageLayout = styled.div`
	padding-top: 60px;
	padding-left: 256px;
	background-color: ${({ theme: { colors } }) => colors.black_primary};
	height: 100vh;
`;

export const ChannelTopDiv = styled.div`
	padding: 16px calc(50% - 642px) 0;
`;

export const TopInnerDiv = styled.div`
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

export const TabDiv = styled.div`
	width: 100%;
	height: 48px;
	display: flex;
	align-items: center;
	position: relative;
`;

export const TabDividerDiv = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_alpha_20};
`;

export const TabInnerDiv = styled.div`
	padding: 0 calc(50% - 642px);
	display: flex;
	gap: 24px;
	align-items: center;
	overflow: hidden;
	height: 48px;
`;

export const TabItemDiv = styled.div<{ $active: boolean }>`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme: { colors }, $active }) =>
		$active ? colors.white_primary : colors.gray};
	font-size: 16px;
	font-weight: 500;
	min-width: 48px;
	height: 90%;
	position: relative;
	border-bottom: 2px solid
		${({ theme: { colors }, $active }) =>
			$active ? colors.white_primary : colors.transparent};
`;
