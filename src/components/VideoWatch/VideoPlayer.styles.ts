import styled from "styled-components";

export const VideoPlayerLayout = styled.div`
	position: relative;
`;

export const VideoPlayerDiv = styled.div`
	margin: 0 auto;
	max-width: calc((100vh - 216px) * (16 / 9));
	min-width: calc(360px * (16 / 9));
`;

export const VideoContainerDiv = styled.div`
	position: relative;
`;

export const ContainerInnerDiv = styled.div`
	outline: none;
	overflow: hidden;
	position: relative;
`;

export const Video = styled.video`
	width: 100%;
	height: 100%;

	&::-webkit-media-controls {
		display: none !important;
	}
`;
