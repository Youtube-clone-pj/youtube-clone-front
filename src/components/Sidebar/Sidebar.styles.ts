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

export const ContentUl = styled.ul`
	padding: 12px;

	& > a > li {
		padding: 0 12px;
		height: 48px;
		display: flex;
		border-radius: 10px;

		&:hover {
			background: rgba(255, 255, 255, 0.1);
		}
	}
`;

export const ItemDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;

	& > h2 {
		color: #f1f1f1;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: 400;
	}
`;
