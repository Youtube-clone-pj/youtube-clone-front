import styled from "styled-components";

export const MoreButtonDropdownLayout = styled.div`
	position: absolute;
	left: 0;
	top: 40px;
	z-index: 50;
`;

export const DropdownDiv = styled.div`
	width: 196px;
	height: 88px;
	border-radius: 8px;

	& > ul {
		background-color: ${({ theme: { colors } }) => colors.black_03};
		color: ${({ theme: { colors } }) => colors.white_primary};
		border-radius: 12px;
		overflow: hidden;
		padding: 8px 0;

		& > li {
			cursor: pointer;
			-webkit-font-smoothing: antialiased;
			align-items: center;
			display: flex;
			font-family: Roboto, Noto, sans-serif;
			font-size: 14px;
			line-height: 24px;
			min-height: 48px;
			padding: 0 16px;
			position: relative;

			& > a {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 16px;
			}

			&:hover {
				background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
			}
		}

		& > .active {
			background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
		}
	}
`;
