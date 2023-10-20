import { styled } from "styled-components";

export const SearchBarLayout = styled.div`
	display: flex;
	align-items: center;
	flex: 0 1 732px;
`;

export const SearchDiv = styled.div`
	display: flex;
	height: 40px;

	& > form {
		display: flex;
		position: relative;
		height: 40px;
		align-items: center;
		border: 1px solid rgba(48, 48, 48, 1);
		border-radius: 40px 0 0 40px;

		& > input {
			border: none;
			height: 30px;
			width: 500px;
			color: #f1f1f1;
			background-color: #0f0f0f;
			outline: none;
			margin-left: 20px;
		}
	}

	& > button {
		border: 1px solid #303030;
		background-color: rgba(255, 255, 255, 0.08);
		border-radius: 0 40px 40px 0;
		border-left: none;
		cursor: pointer;
		height: 40px;
		width: 64px;
		display: flex;
		align-items: center;
		justify-content: center;

		& > svg {
			width: 20px;
			height: 20px;
		}
	}
`;
