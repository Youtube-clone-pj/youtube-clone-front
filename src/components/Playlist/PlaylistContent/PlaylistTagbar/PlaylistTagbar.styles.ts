import styled from "styled-components";

export const TagbarLayout = styled.div<{ $scroll: boolean }>`
	width: 100%;
	height: 56px;
	position: fixed;
	background-color: ${({ theme: { colors } }) => colors.black_primary};
	z-index: 99;
	display: flex;
	align-items: center;
	top: ${({ $scroll }) => ($scroll ? "56px" : "auto")};
`;

export const TagbarDiv = styled.div`
	padding: 0 24px;
	display: flex;
	gap: 12px;
`;

export const TagItemDiv = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 12px;
	height: 32px;
	border-radius: 8px;
	background-color: ${({ disabled, theme: { colors } }) =>
		disabled ? colors.white_primary : colors.white_alpha_10};
	color: ${({ disabled, theme: { colors } }) =>
		disabled ? colors.black_primary : colors.white_primary};
	min-width: 12px;
	font-size: 12px;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
	}
`;
