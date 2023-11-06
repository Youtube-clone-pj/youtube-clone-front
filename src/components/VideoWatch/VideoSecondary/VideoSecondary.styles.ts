import styled from "styled-components";

export const VideoSecondaryLayout = styled.div`
	min-width: 300px;
	padding: 24px 24px 0 0;
	position: relative;
	width: 402px;
	background-color: ${({ theme: { colors } }) => colors.black_primary};
`;

export const VideoSecondaryDiv = styled.div`
	display: flex;
	flex-direction: column;
`;
