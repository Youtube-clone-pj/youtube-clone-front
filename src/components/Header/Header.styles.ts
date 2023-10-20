import styled from "styled-components";

export const HeaderDiv = styled.header`
	display: flex;
	width: 100%;
	position: fixed;
	background-color: #0f0f0f;
	z-index: 100;
`;

export const HeaderInnerDiv = styled.div`
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
`;

export const HeaderLeftDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const ButtonDiv = styled.div`
	color: #fff;
	width: 40px;
	height: 40px;
	padding: 8px;

	& > button {
		width: 100%;
		height: 100%;
		cursor: pointer;

		& > svg {
			width: 24px;
			height: 24px;
		}
	}

	&:hover {
		border-radius: 50%;
		background-color: rgb(39, 39, 39);
	}
`;
