import styled from "styled-components";

export const PlaylistVideoCardLayout = styled.div<{ $cursor: boolean }>`
	display: flex;
	align-items: center;
	border-radius: 12px;
	cursor: ${({ $cursor }) => ($cursor ? "grab" : "default")};

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
	}
`;

export const IndexDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const IndexIconDiv = styled.div`
	padding: 0 6px;
	display: flex;
	justify-content: center;
	align-items: center;

	& > svg {
		width: 24px;
		height: 24px;
	}
`;

export const IndexTextDiv = styled.div`
	color: ${({ theme: { colors } }) => colors.gray};
	text-align: center;
	width: 36px;
	font-family: "Roboto", "Arial", sans-serif;
	font-size: 14px;
	line-height: 20px;
	font-weight: ${({ theme: { font } }) => font.weight.medium};
	display: flex;
	flex-direction: column;
	flex: none;
	justify-content: center;
`;

export const ContentDiv = styled.div`
	padding: 8px 0;
	cursor: pointer;
	min-width: 0;
	display: flex;
	flex: 1;
	flex-basis: 1e-9px;
	flex-wrap: wrap;
	justify-content: flex-start;
`;

export const ContentInnerDiv = styled.div`
	min-width: 0;
	flex-basis: 368px;
	flex-grow: 1;
	display: flex;
	gap: 8px;
`;

export const ThumbnailDiv = styled.div`
	width: 160px;
	height: 90px;
	position: relative;

	& > a {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border-radius: 8px;
		height: 100%;
		overflow: hidden;

		& > img {
			width: 100%;
			height: 100%;
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
	line-height: 12px;
	letter-spacing: 0.5px;
	height: 12px;
	font-size: 12px;
	display: inline-flex;
	align-items: center;

	& > span {
		max-height: 12px;
		overflow: hidden;
	}
`;

export const InfoDiv = styled.div`
	min-width: 0;
	flex: 1;
	flex-basis: 1e-9px;

	& > h3 {
		display: block;
		& > a {
			color: ${({ theme: { colors } }) => colors.white_primary};
			margin-bottom: 8px;
			font-family: "Roboto", "Arial", sans-serif;
			font-size: 16px;
			line-height: 22px;
			font-weight: ${({ theme: { font } }) => font.weight.medium};
			overflow: hidden;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			text-overflow: ellipsis;
			white-space: normal;
			display: -webkit-box;
			min-width: 0;
		}
	}
`;

export const InfoMetaDiv = styled.div`
	font-family: "Roboto", "Arial", sans-serif;
	display: flex;
	max-width: 100%;
	align-items: center;

	& > h4 {
		font-size: 12px;
		line-height: 18px;
		color: ${({ theme: { colors } }) => colors.gray};

		&::after {
			content: "•";
			margin: 0 4px;
		}

		&:last-of-type::after {
			content: none;
		}
	}
`;

export const MenuDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	position: relative;
`;

export const IconDiv = styled.div<{ $showmenu: boolean }>`
	display: ${({ $showmenu }) => ($showmenu ? "block" : "none")};
	cursor: pointer;

	& > svg {
		width: 24px;
		height: 24px;
	}
`;
