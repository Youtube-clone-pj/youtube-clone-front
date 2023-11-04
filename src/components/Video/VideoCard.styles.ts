import styled from "styled-components";

export const VideoCardLayout = styled.div`
	margin: 0 8px 40px;
	position: relative;
	width: calc(100% / 4 - 16px);
`;

export const CardInnerDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ThumbnailDiv = styled.div`
	width: 100%;
	position: relative;

	& > a {
		height: 193px;
	}
`;

export const ImgDiv = styled.div`
	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 12px;
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

export const DetailInfoDiv = styled.div`
	display: flex;
	flex: auto;
	position: relative;
	margin: 0;
	cursor: pointer;

	& > a {
		display: inline-block;
		cursor: pointer;
		height: 36px;
		margin: 12px 12px 0 0;
	}
`;

export const ProfileDiv = styled.div`
	display: inline-block;
	background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
	opacity: 1;
	overflow: hidden;
	width: 36px;
	height: 36px;
	border-radius: 50%;

	& > img {
		width: 100%;
		height: 100%;
	}
`;

export const TextDiv = styled.div`
	overflow-x: hidden;
	padding-right: 24px;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.white_primary};
		margin: 12px 0 4px;

		& > a {
			display: -webkit-box;
			color: ${({ theme: { colors } }) => colors.white_primary};
			font-family: Roboto, Arial, sans-serif;
			font-size: 1rem;
			font-weight: 500;
			line-height: 1.6rem;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: normal;
			word-break: break-word;
		}
	}

	& > h4 {
		font-size: 0.8rem;
		color: ${({ theme: { colors } }) => colors.gray};

		& > span:not(:first-of-type)::before {
			content: "•";
			margin: 0 4px;
		}
	}

	& > h4:first-of-type {
		line-height: 1.4rem;
	}

	& > h4:first-of-type:hover {
		color: ${({ theme: { colors } }) => colors.white_primary};
	}
`;

export const MenuDiv = styled.div<{ $showmenu: boolean }>`
	display: ${({ $showmenu }) => ($showmenu ? "flex" : "none")};
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 4px;
	right: -12px;
	width: 40px;
	height: 40px;
`;
