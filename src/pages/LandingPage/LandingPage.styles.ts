import styled from "styled-components";

export const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 60px;
	padding-left: 256px;
	background-color: ${({ theme: { colors } }) => colors.black_primary};
`;
