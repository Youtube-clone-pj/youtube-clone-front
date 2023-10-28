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
	height: 100%;
	outline: none;
	overflow: hidden;
	position: relative;
	width: 100%;
`;

export const Video = styled.video`
	&::-webkit-media-controls {
		display: none !important;
	}
`;
