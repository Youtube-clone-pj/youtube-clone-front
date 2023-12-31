import styled from "styled-components";

export const HistoryShortsLayout = styled.div`
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_alpha_20};
	display: flex;
	flex-direction: column;
`;

export const ShortsTitleDiv = styled.div`
	margin-top: 24px;

	& > h2 {
		display: flex;
		align-items: center;
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 20px;
		line-height: 28px;
		font-weight: ${({ theme: { font } }) => font.weight.bold};
		gap: 8px;
		color: ${({ theme: { colors } }) => colors.white_primary};

		& > svg {
			width: 24px;
			height: 24px;
		}
	}
`;

export const ShortsVideoDiv = styled.div`
	margin-top: 24px;
`;

export const VideoInnerDiv = styled.div`
	position: relative;
`;

export const ScrollDiv = styled.div`
	overflow: hidden;
`;

export const ScrollInnerDiv = styled.div`
	margin-bottom: 24px;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.05, 0, 0, 1);
	will-change: transform;
	display: inline-block;
	white-space: nowrap;
`;

export const LeftArrowDiv = styled.div`
	height: 302px;
	will-change: transform;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: -20px;
	z-index: 100;

	& > button {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		cursor: pointer;
		background-color: ${({ theme: { colors } }) => colors.black_03};
		box-shadow:
			0 4px 4px rgba(0, 0, 0, 0.3),
			0 0 4px rgba(0, 0, 0, 0.2);
	}
`;

export const RightArrowDiv = styled(LeftArrowDiv)`
	right: -20px;
	left: auto;
`;
