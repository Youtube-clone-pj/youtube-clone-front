import styled from "styled-components";

export const SidebarListLayout = styled.div`
	padding: 12px;
`;

export const ContentUl = styled.ul`
	padding: 12px 0;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);

	&:first-of-type {
		padding-top: 0;
	}

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
