import styled from "styled-components";

export const HistoryVideoLayout = styled.div`
	max-width: 862px;
	margin-top: 16px;
`;

export const HistoryVideoDiv = styled.div`
	display: flex;
	gap: 16px;
`;

export const ThumbnailDiv = styled.div`
	flex: none;
	position: relative;
	width: 246px;

	& > a {
		display: block;
		height: 138px;

		& > img {
			width: 100%;
			height: 100%;
			border-radius: 8px;
		}
	}
`;

export const OverlayDiv = styled.div``;

export const ProgressFullDiv = styled.div`
	background-color: ${({ theme: { colors } }) => colors.gray_primary};
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	height: 4px;
	z-index: 1;
`;

export const ProgressLiveDiv = styled.div`
	width: 10%;
	background-color: ${({ theme: { colors } }) => colors.red_primary};
	height: 100%;
`;

export const TimeStampDiv = styled.div`
	border-radius: 4px;
	background-color: ${({ theme: { colors } }) => colors.black_alpha_80};
	color: ${({ theme: { colors } }) => colors.white};
	position: absolute;
	right: 0;
	bottom: 0;
	padding: 3px 4px;
	margin: 4px;
	line-height: 1.2rem;
	letter-spacing: 0.5px;
	height: 12px;
	font-size: 0.8rem;
	display: inline-flex;
	align-items: center;

	& > span {
		max-height: 1.2rem;
		overflow: hidden;
	}
`;

export const InfoDiv = styled.div`
	max-width: 600px;
	cursor: pointer;
	flex: 1;
	flex-basis: 1e-9px;
	display: flex;
	flex-direction: column;
	font-family: "Roboto", "Arial", sans-serif;
`;

export const TitleDiv = styled.div`
	display: flex;
	justify-content: space-between;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.white_primary};
		font-size: 18px;
		line-height: 26px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		cursor: pointer;
	}
`;

export const MenuDiv = styled.div`
	display: flex;
	gap: 8px;

	& > button {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		margin-top: -11px;
	}
`;

export const InfoMetaDiv = styled.div`
	display: flex;

	& > h4 {
		font-size: 12px;
		line-height: 18px;
		color: ${({ theme: { colors } }) => colors.gray};

		& > a::after {
			content: "•";
			margin: 0 4px;
		}
	}
`;

export const TextP = styled.p`
	color: ${({ theme: { colors } }) => colors.gray};
	padding-top: 8px;
	margin-bottom: 8px;
	font-size: 12px;
	line-height: 18px;
	overflow: hidden;
	max-height: 3.6rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	white-space: normal;
`;
