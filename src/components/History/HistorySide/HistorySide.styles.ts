import styled from "styled-components";

export const HistorySideLayout = styled.div`
	overflow-y: auto;
	height: 100%;
	position: fixed;
	right: 0;
`;

export const HistorySideDiv = styled.div`
	padding: 0 28px;
	width: 385px;
	margin: 8px 0 50px;
`;

export const InnerDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SearchDiv = styled.div`
	margin: 4px 16px 8px;
	display: inline-flex;
	align-items: center;
`;

export const SearchInnerDiv = styled.div`
	padding: 8px 0;
`;

export const InputDiv = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_primary};
	width: 250px;
`;

export const SearchButtonDiv = styled.div`
	margin-left: -8px;

	& > button {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		& > svg {
			width: 24px;
			height: 24px;
		}
	}
`;

export const SearchInputDiv = styled.div`
	flex: 1 1 auto;
	position: relative;
	max-width: 100%;

	& > input {
		position: relative;
		outline: none;
		width: 100%;
		border: none;
		background-color: transparent;
		margin-left: 8px;
		color: ${({ theme: { colors } }) => colors.white_primary};
	}
`;

export const ButtonUl = styled.ul``;

export const ButtonLi = styled.li`
	margin-top: 16px;
	display: flex;
`;

export const ButtonInnerDiv = styled.div`
	display: flex;
	color: ${({ theme: { colors } }) => colors.white_primary};
	padding: 0 16px;
	height: 36px;
	font-size: 14px;
	line-height: 36px;
	border-radius: 18px;
	font-weight: ${({ theme: { font } }) => font.weight.medium};
	align-items: center;
	gap: 6px;

	& > svg {
		width: 24px;
		height: 24px;
	}

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
	}
`;

export const ButtonTextDiv = styled.div``;
