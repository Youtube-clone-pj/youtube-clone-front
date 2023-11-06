import styled from "styled-components";

export const VideoWatchLayout = styled.div`
	background-color: ${({ theme: { colors } }) => colors.black_primary};
	z-index: 100;
	width: 100%;
`;

export const VideoWatchDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	padding: 60px 0 100px;
	max-width: 1754px;
	min-width: 1012px;
`;
