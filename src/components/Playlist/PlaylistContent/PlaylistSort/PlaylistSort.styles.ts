import styled from "styled-components";

export const PlaylistSortLayout = styled.div`
	display: flex;
	margin-bottom: 16px;
`;

export const SortDiv = styled.div`
	margin-left: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	gap: 8px;
	cursor: pointer;

	& > h3 {
		font-size: 14px;
		font-weight: ${({ theme: { font } }) => font.weight.medium};
		color: ${({ theme: { colors } }) => colors.white_primary};
	}
`;
