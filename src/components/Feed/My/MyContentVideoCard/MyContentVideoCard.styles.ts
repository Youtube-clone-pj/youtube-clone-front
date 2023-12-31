import styled from "styled-components";

export const LayoutDiv = styled.div`
	width: 210px;
	display: inline-block;
	margin: 0 4px 24px 0;
`;

export const ThumbnailDiv = styled.div`
	width: 210px;
	height: 118px;
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
	cursor: pointer;
	position: relative;
	display: flex;
	flex-direction: column;
`;

export const InfoInnerDiv = styled.div`
	padding-right: 24px;

	& > h3 {
		margin: 8px 0;

		& > a {
			color: ${({ theme: { colors } }) => colors.white_primary};
			font-family: "Roboto", "Arial", sans-serif;
			font-size: 14px;
			line-height: 20px;
			font-weight: ${({ theme: { font } }) => font.weight.medium};
			overflow: hidden;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			text-overflow: ellipsis;
			white-space: normal;
			display: -webkit-box;
		}
	}
`;

export const InfoMetaDiv = styled.div`
	display: flex;
	flex-direction: column;

	& > h4 {
		font-size: 12px;
		line-height: 18px;
		color: ${({ theme: { colors } }) => colors.gray};
		overflow: hidden;
		-webkit-line-clamp: 1;
		display: flex;
		align-items: center;

		& > span::after {
			content: "•";
			margin: 0 4px;
		}

		& > span:last-of-type::after {
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
	position: absolute;
	top: -2px;
	right: -8px;

	& > svg {
		width: 24px;
		height: 24px;
	}
`;
