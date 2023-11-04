import styled from "styled-components";

export const VideoInfoCardLayout = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const VideoInfoCardDiv = styled.div`
	background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
	color: ${({ theme: { colors } }) => colors.white_primary};
	border-radius: 12px;
	cursor: pointer;
	flex: 1 1;
	flex-basis: 1e-9px;
	font-family: Roboto, Arial, sans-serif;
	font-size: 14px;
	line-height: 20px;
	position: relative;
	margin: 12px 12px 0 0;
	min-width: max(381px, 50% - 12px);

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
	}
`;

export const InnerDiv = styled.div`
	margin: 12px;
`;

export const TopDiv = styled.div`
	overflow: hidden;
	display: inline-flex;
	width: 100%;
`;

export const TopTextDiv = styled.div`
	white-space: pre;
`;

export const BottomDiv = styled.div`
	position: relative;
	overflow: hidden;
	contain: content;
`;

export const BottomInnerDiv = styled.div`
	overflow: hidden;
	max-height: 6rem;
	white-space: pre-wrap;
	-webkit-mask-image: linear-gradient(
			to top,
			transparent 0%,
			transparent 2rem,
			rgb(0, 0, 0) 2rem,
			rgb(0, 0, 0) 100%
		),
		linear-gradient(
			to right,
			rgb(0, 0, 0) 0%,
			rgb(0, 0, 0) 176px,
			transparent 200px,
			transparent 100%
		);

	& > span > a {
		color: ${({ theme: { colors } }) => colors.blue_primary};
	}
`;

export const MoreButton = styled.button`
	position: absolute;
	left: 188px;
	bottom: 0;
	min-width: 40px;
	white-space: pre;
	text-transform: none;
	transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	cursor: pointer;
`;
