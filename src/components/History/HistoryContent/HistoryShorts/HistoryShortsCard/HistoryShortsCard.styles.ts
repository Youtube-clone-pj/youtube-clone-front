import styled from "styled-components";

export const HistoryShortsCardLayout = styled.div`
	padding-right: 4px;
	display: inline-block;
	white-space: normal;
	position: relative;
	width: 210px;
`;

export const HistoryShortsCardInnerDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ThumbnailDiv = styled.div`
	width: 100%;
	position: relative;

	& > a {
		display: block;
		height: 302px;
	}
`;

export const ImgDiv = styled.div`
	& > img {
		width: 100%;
		height: 302px;
		object-fit: cover;
		border-radius: 12px;
	}
`;

export const DetailInfoDiv = styled.div`
	cursor: pointer;
	position: relative;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.white_primary};
		padding: 8px 24px 0 0;

		& > a {
			display: -webkit-box;
			color: ${({ theme: { colors } }) => colors.white_primary};
			font-family: "Roboto", "Arial", sans-serif;
			font-size: 14px;
			font-weight: ${({ theme: { font } }) => font.weight.medium};
			line-height: 20px;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: normal;
			word-break: break-word;
		}
	}

	& > h4 {
		color: ${({ theme: { colors } }) => colors.gray};
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 12px;
		line-height: 18px;
	}
`;

export const MenuDiv = styled.div<{ $showmenu: boolean }>`
	display: ${({ $showmenu }) => ($showmenu ? "flex" : "none")};
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
	width: 40px;
	height: 40px;
`;
