import styled from "styled-components";

export const ShortsCardLayout = styled.div`
	margin-bottom: 20px;
	width: calc(100% / 6 - 16px);
	position: relative;
	margin: 0 8px;
`;

export const CardInnerDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ThumbnailDiv = styled.div`
	width: 100%;
	position: relative;

	& > a {
		height: 398px;
	}
`;

export const ImgDiv = styled.div`
	& > img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 12px;
	}
`;

export const DetailInfoDiv = styled.div`
	margin: 0;
	cursor: pointer;
	position: relative;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.white_primary};
		padding: 12px 24px 0 0;

		& > a {
			display: -webkit-box;
			color: ${({ theme: { colors } }) => colors.white_primary};
			font-family: Roboto, Arial, sans-serif;
			font-size: 1rem;
			font-weight: ${({ theme: { font } }) => font.weight.medium};
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
		color: ${({ theme: { colors } }) => colors.gray};
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 14px;
		line-height: 20px;
		overflow: hidden;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		white-space: normal;
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
