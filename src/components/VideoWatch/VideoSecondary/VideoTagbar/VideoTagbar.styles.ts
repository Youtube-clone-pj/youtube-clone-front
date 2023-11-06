import styled from "styled-components";

export const VideoTagbarLayout = styled.div``;

export const VideoTagbarDiv = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;

	& .gradient {
		-webkit-mask-image: linear-gradient(
				to right,
				transparent 0,
				transparent 51px,
				#000 77px,
				#000 50%,
				transparent 50%,
				transparent 100%
			),
			linear-gradient(
				to left,
				transparent 0,
				transparent 51px,
				#000 77px,
				#000 50%,
				transparent 50%,
				transparent 100%
			);
	}

	& .left {
		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0,
			transparent 51px,
			#000 77px,
			#000 100%
		);
	}

	& .right {
		-webkit-mask-image: linear-gradient(
			to left,
			transparent 0,
			transparent 51px,
			#000 77px,
			#000 100%
		);
	}
`;

export const ButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	background-color: ${({ theme: { colors } }) => colors.black_primary};
	position: absolute;

	& > button {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		cursor: pointer;

		&:hover {
			background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
		}
	}
`;

export const LeftButtonDiv = styled(ButtonDiv)`
	left: 0;
`;

export const RightButtonDiv = styled(ButtonDiv)`
	right: 0;
`;

export const ScrollDiv = styled.div`
	overflow: hidden;
	padding-top: 5px;
	white-space: nowrap;
`;

export const ScrollInnerDiv = styled.div`
	display: inline-block;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.05, 0, 0, 1);
	white-space: nowrap;
	will-change: transform;
	margin-right: 12px;
	overflow: hidden;
`;

export const TagItemDiv = styled.div<{ $active: boolean }>`
	background-color: ${({ theme: { colors }, $active }) =>
		$active ? colors.white_primary : colors.white_alpha_10};
	color: ${({ theme: { colors }, $active }) =>
		$active ? colors.black_primary : colors.white_primary};
	margin: 8px 8px 8px 0;
	padding: 0 12px;
	transition: background-color 0.5s cubic-bezier(0.05, 0, 0, 1);
	align-items: center;
	border: none;
	border-radius: 8px;
	display: inline-flex;
	font-size: 0.8rem;
	height: 32px;
	line-height: 2rem;
	min-width: 12px;
	outline: none;
	overflow: hidden;
	position: relative;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
	}

	& > span {
		max-width: 20rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;
