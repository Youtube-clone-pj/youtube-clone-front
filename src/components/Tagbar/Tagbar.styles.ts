import styled from "styled-components";

export const TagbarLayout = styled.div`
	width: 100%;
	height: 56px;
	position: fixed;
	background-color: #0f0f0f;
	z-index: 99;
	display: flex;
	align-items: center;
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
	background-color: ${({ disabled }) =>
		disabled ? "#f1f1f1" : "rgba(255,255,255,0.1)"};
	color: ${({ disabled }) => (disabled ? "#0f0f0f" : "#f1f1f1")};
	min-width: 12px;
	font-size: 12px;
	cursor: pointer;

	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
`;