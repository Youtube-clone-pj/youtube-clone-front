import styled from "styled-components";

export const VideoListLayout = styled.div<{ mt: boolean }>`
	width: 100%;
	padding-top: 24px;
	margin-top: 56px;
	margin-top: ${({ mt }) => (mt ? "56px" : "0")};
	background-color: ${({ theme: { colors } }) => colors.black_primary};
`;

export const VidoeListRowDiv = styled.div``;

export const RowInnerDiv = styled.div`
	margin: 0 16px;
	display: flex;
`;
