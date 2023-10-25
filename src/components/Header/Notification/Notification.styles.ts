import styled from "styled-components";

export const NotificationLayout = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	z-index: 100;
	max-width: 480px;
	max-height: 640px;
	overflow: auto;
	width: 480px;
	height: 640px;
	background-color: #282828;
	border-radius: 12px;
	box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	font-family: "Roboto", "Arial", sans-serif;
`;

export const TopDiv = styled.div`
	display: flex;
	align-items: center;
	min-height: 48px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	color: #f1f1f1;
	background-color: #282828;
	padding: 0 8px 0 16px;

	& > h2 {
		font-size: 16px;
		line-height: 22px;
		flex: 1;
		flex-basis: 1e-9px;
	}
`;

export const TopButtonDiv = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BottomDiv = styled.div`
	overflow-y: auto;
`;

export const BottomInnerDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	& > svg {
		width: 120px;
		height: 120px;
	}
`;

export const BottomTextDiv = styled.div`
	width: 280px;
	color: #aaa;
	text-align: center;

	& > h3 {
		margin-bottom: 8px;
		font-size: 16px;
		line-height: 22px;
		font-weight: 500;
	}

	& > h4 {
		margin-top: 8px;
		font-size: 14px;
		line-height: 20px;
	}
`;
