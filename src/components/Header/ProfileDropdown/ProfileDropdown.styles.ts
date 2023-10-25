import styled from "styled-components";

export const ProfileDropdownLayout = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	z-index: 100;
	max-width: 300px;
	max-height: 750px;
	overflow: auto;
	width: 300px;
	background-color: #282828;
	border-radius: 12px;
	box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
`;

export const TopDiv = styled.div`
	display: flex;
	padding: 16px;
	position: relative;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	gap: 16px;

	& > img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
`;

export const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > h3 {
		font-size: 16px;
		line-height: 22px;
		color: #f1f1f1;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	& > a {
		margin-top: 8px;
		font-size: 14px;
		line-height: 20px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: pre;
		color: #3ea6ff;
	}
`;

export const BottomDiv = styled.div`
	overflow-y: auto;
	font-family: "Roboto", "Arial", sans-serif;

	& > ul {
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding: 8px 0;

		& > a > li {
			padding: 0 36px 0 16px;
			white-space: nowrap;
			color: #f1f1f1;
			cursor: pointer;
			display: flex;
			align-items: center;
			font-size: 16px;
			line-height: 24px;
			min-height: 40px;
			gap: 16px;

			&:hover {
				background-color: rgba(255, 255, 255, 0.1);
			}

			& > h3 {
				font-size: 14px;
				line-height: 20px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}

		&:last-of-type {
			border-bottom: none;
		}
	}
`;
