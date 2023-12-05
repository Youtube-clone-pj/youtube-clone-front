import styled from "styled-components";

export const LayoutDiv = styled.div`
	padding-top: 24px;
	display: flex;
	flex-direction: column;
	flex: 1;
	flex-basis: 1e-9px;
`;

export const TitleDiv = styled.div`
	width: 100%;
	display: flex;
`;

export const TitleInnerDiv = styled.div`
	width: 100%;
	margin: 24px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme: { colors } }) => colors.white_primary};
	height: 20px;

	& > h2 {
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 20px;
		line-height: 28px;
		font-weight: ${({ theme: { font } }) => font.weight.bold};
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const MenuDiv = styled.div`
	display: flex;

	& > button {
		font-size: 14px;
		font-weight: ${({ theme: { font } }) => font.weight.bold};
		line-height: 36px;
		border-radius: 18px;
		height: 36px;
		padding: 0 16px;
		color: ${({ theme: { colors } }) => colors.blue_primary};
		background-color: transparent;
		cursor: pointer;

		&:hover {
			background-color: rgb(42, 56, 78);
		}
	}
`;

export const FlowButtonDiv = styled.div`
	display: flex;

	& > button {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

		& > svg {
			width: 24px;
			height: 24px;
		}

		&:hover {
			background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
		}
	}
`;
