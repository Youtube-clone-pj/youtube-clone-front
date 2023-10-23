import { styled } from "styled-components";

export const SidebarLayout = styled.aside`
	position: fixed;
	width: 256px;
	height: 100%;
	overflow-y: auto;
	background-color: #0f0f0f;
	z-index: 99;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const SidebarDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 240px;
	margin-top: 60px;
`;

export const ContentDiv = styled.div``;
