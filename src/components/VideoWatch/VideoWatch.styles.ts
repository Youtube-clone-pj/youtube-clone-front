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

export const PrimaryDiv = styled.div`
	flex: 1;
	flex-basis: 1e-9px;
	margin-left: 24px;
	max-width: calc((100vh - 216px) * (16 / 9));
	min-width: calc(360px * (16 / 9));
	padding: 24px 24px 0 0;
`;

export const PrimaryInnerDiv = styled.div``;

export const SecondaryDiv = styled.div``;
