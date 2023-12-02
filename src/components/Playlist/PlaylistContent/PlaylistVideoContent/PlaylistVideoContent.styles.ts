import styled from "styled-components";

export const PlaylistVideoContentLayout = styled.div<{ $padding: boolean }>`
	padding-top: ${({ $padding }) => ($padding ? "0" : "56px")};
	margin-right: 24px;
	display: flex;
	flex-direction: column;
`;
