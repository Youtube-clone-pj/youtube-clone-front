import styled from "styled-components";

export const SidebarFooterLayout = styled.div``;

export const GuideLinkDiv = styled.div`
	padding: 16px 24px 0;

	& > a:not(:last-child) {
		margin-right: 8px;
	}

	& > a {
		display: inline-block;
		text-decoration: none;
		color: #aaa;
		font-size: 0.86rem;
		font-weight: 500;
		line-height: 1.3rem;
	}
`;

export const GuideTextDiv = styled.div`
	padding: 16px 24px;
	color: ${({ theme: { colors } }) => colors.gray_primary};
	font-family: "Roboto", "Arial", sans-serif;
	font-size: 0.78rem;
	line-height: 1.3rem;

	& > a {
		color: ${({ theme: { colors } }) => colors.blue_primary};
	}
`;
