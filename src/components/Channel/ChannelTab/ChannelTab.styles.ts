import styled from "styled-components";

export const TabLayout = styled.div`
	width: 100%;
	height: 48px;
	display: flex;
	align-items: center;
	position: sticky;
	top: 60px;
`;

export const TabDividerDiv = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_alpha_20};
`;

export const TabInnerDiv = styled.div`
	padding: 0 calc(50% - 642px);
	display: flex;
	gap: 24px;
	align-items: center;
	overflow: hidden;
	height: 48px;
`;

export const TabItemDiv = styled.div<{ $active: boolean }>`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme: { colors }, $active }) =>
		$active ? colors.white_primary : colors.gray};
	font-size: 16px;
	font-weight: 500;
	min-width: 48px;
	height: 90%;
	position: relative;
	border-bottom: 2px solid
		${({ theme: { colors }, $active }) =>
			$active ? colors.white_primary : colors.transparent};
`;
