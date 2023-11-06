import styled from "styled-components";

export const ProfileDropdownLayout = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	z-index: 100;
	max-width: 300px;
	max-height: 750px;
	overflow: auto;
	width: 300px;
	background-color: ${({ theme: { colors } }) => colors.black_secondary};
	border-radius: 12px;
	box-shadow: 0px 4px 32px 0px
		${({ theme: { colors } }) => colors.black_alpha_10};
	display: flex;
	flex-direction: column;
`;

export const TopDiv = styled.div`
	display: flex;
	padding: 16px;
	position: relative;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_alpha_20};
	gap: 16px;

	& > img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
`;

export const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > h3 {
		font-size: 16px;
		line-height: 22px;
		color: ${({ theme: { colors } }) => colors.white_primary};
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	& > a {
		margin-top: 8px;
		font-size: 14px;
		line-height: 20px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: pre;
		color: ${({ theme: { colors } }) => colors.blue_primary};
	}
`;

export const BottomDiv = styled.div`
	overflow-y: auto;
	font-family: "Roboto", "Arial", sans-serif;

	& > ul {
		border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_alpha_20};
		padding: 8px 0;

		& > a > li {
			padding: 0 36px 0 16px;
			white-space: nowrap;
			color: #f1f1f1;
			cursor: pointer;
			display: flex;
			align-items: center;
			line-height: 24px;
			min-height: 40px;
			gap: 16px;

			&:hover {
				background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
			}

			& > h3 {
				font-size: 14px;
				line-height: 20px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}

		&:last-of-type {
			border-bottom: none;
		}
	}
`;
