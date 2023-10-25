import styled from "styled-components";

export const HeaderLayout = styled.header`
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
	gap: 16px;
`;

export const ButtonDiv = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;

	& > button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		cursor: pointer;

		&:hover {
			border-radius: 50%;
			background-color: rgb(39, 39, 39);
		}

		& > svg {
			width: 24px;
			height: 24px;
		}
	}
`;

export const LogoDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	cursor: pointer;

	& > svg {
		width: 24px;
		height: 24px;
	}

	& > h2 {
		font-size: 24px;
		color: #fff;
		font-weight: 700;
		letter-spacing: -0.05em;
	}
`;

export const HeaderRightDiv = styled.div``;

export const RightInnerDiv = styled.div`
	min-width: 225px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 12px;
`;

export const LoginDiv = styled.div`
	padding: 0 15px;
	color: #3ea6ff;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 18px;
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;

	&:hover {
		background-color: rgb(42, 56, 78);
	}

	& > svg {
		width: 24px;
		height: 24px;
	}

	& > h2 {
		font-size: 14px;
		line-height: 36px;
	}
`;

export const ProfileDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	margin-left: 12px;
	position: relative;

	& > button {
		width: 32px;
		height: 32px;
		cursor: pointer;

		& > img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
`;
