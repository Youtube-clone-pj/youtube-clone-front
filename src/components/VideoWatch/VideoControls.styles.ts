import styled from "styled-components";

export const VideoControlLayout = styled.div`
	bottom: 0;
	height: 48px;
	width: 100%;
	padding-top: 3px;
	text-align: left;
	position: absolute;
`;

export const ProgressbarDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 5px;
	bottom: 47px;
	cursor: pointer;
`;

export const ProgressInnerDiv = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 31;
`;

export const ProgressStickDiv = styled.div`
	width: 100%;
	height: 100%;
	z-index: 32;
	position: relative;
	left: 0;
	float: left;
`;

export const StickList = styled.div`
	z-index: 39;
	background: rgba(255, 255, 255, 0.2);
	height: 100%;
	transform: scaleY(0.6);
	transition:
		transform 0.1s cubic-bezier(0.4, 0, 1, 1),
		-webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
	position: relative;
`;

export const StickPlayDiv = styled.div`
	z-index: 34;
	background-color: #f00;
`;

export const ProgressCircleDiv = styled.div`
	position: absolute;
	top: -4px;
	left: -6.5px;
	z-index: 43;
`;

export const ProgressCircle = styled.div`
	height: 13px;
	width: 13px;
	border-radius: 6.5px;
	transition:
		transform 0.1s cubic-bezier(0.4, 0, 1, 1),
		-webkit-transform 0.1s cubic-bezier(0.4, 0, 1, 1);
`;

export const ControlDiv = styled.div`
	display: flex;
	height: 48px;
	line-height: 48px;
`;

export const LeftDiv = styled.div`
	display: flex;
	justify-content: flex-start;
	flex: 1 1;

	& > button {
		width: 46px;
		cursor: pointer;
	}
`;

export const TimeDiv = styled.div`
	display: flex;
	align-items: center;
	color: #fff;
	font-size: 15px;
	z-index: 50;
`;

export const RightDiv = styled(LeftDiv)`
	justify-content: flex-end;
`;

export const SoundDiv = styled.div`
	display: flex;
	align-items: center;

	& > button {
		width: 46px;
		height: 100%;
		cursor: pointer;
	}
`;

export const SoundControlDiv = styled.div`
	z-index: 50;

	& > input {
		width: 100%;
		outline: none;
		border: none;
		background: transparent;
	}
`;
