import styled from "styled-components";

import { listStyleType } from "./SidebarList";

export const SidebarListLayout = styled.div`
	padding: 12px;
`;

export const ContentUl = styled.ul`
	padding: 12px 0;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_alpha_10};

	&:first-of-type {
		padding-top: 0;
	}
`;

export const DefaultLi = styled.li`
	padding: 0 12px;
	height: 40px;
	display: flex;
	border-radius: 10px;
`;

export const TitleLi = styled(DefaultLi)<listStyleType>`
	cursor: ${({ $title }) => ($title ? "pointer" : "default")};
	background: ${({ $active, theme: { colors } }) =>
		$active ? colors.white_alpha_10 : colors.transparent};

	&:hover {
		background: ${({ $title, theme: { colors } }) =>
			$title ? colors.white_alpha_10 : colors.transparent};
	}
`;

export const ContentLi = styled(DefaultLi)<{ $active: boolean }>`
	background: ${({ $active, theme: { colors } }) =>
		$active ? colors.white_alpha_10 : colors.transparent};

	&:hover {
		background: ${({ theme: { colors } }) => colors.white_alpha_10};
	}
`;

export const ItemDiv = styled.div<{ $title: boolean }>`
	display: flex;
	align-items: center;
	gap: ${({ $title }) => ($title ? "8px" : "24px")};
	font-size: ${({ $title }) => ($title ? "16px" : "14px")};

	& > h2 {
		color: ${({ theme: { colors } }) => colors.white_primary};
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;
