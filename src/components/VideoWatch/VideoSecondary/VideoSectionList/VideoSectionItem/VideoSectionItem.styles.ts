import styled from "styled-components";

export const VideoSectionItemLayout = styled.div`
	margin-top: 16px;
`;

export const VideoSectionItemDiv = styled.div`
	display: flex;
	width: 100%;
	gap: 8px;
`;

export const ThumbnailDiv = styled.div`
	width: 168px;
	height: 94px;
	position: relative;
	flex: none;

	& > a {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border-radius: 8px;
		height: 100%;
		overflow: hidden;

		& > img {
			width: 100%;
			height: 100%;
		}
	}
`;

export const OverlayDiv = styled.div``;

export const ProgressFullDiv = styled.div`
	background-color: ${({ theme: { colors } }) => colors.gray_primary};
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	height: 4px;
	z-index: 1;
`;

export const ProgressLiveDiv = styled.div`
	width: 10%;
	background-color: ${({ theme: { colors } }) => colors.red_primary};
	height: 100%;
`;

export const TimeStampDiv = styled.div`
	border-radius: 4px;
	background-color: ${({ theme: { colors } }) => colors.black_alpha_80};
	color: ${({ theme: { colors } }) => colors.white};
	position: absolute;
	right: 0;
	bottom: 0;
	padding: 3px 4px;
	margin: 4px;
	line-height: 1.2rem;
	letter-spacing: 0.5px;
	height: 12px;
	font-size: 0.8rem;
	display: inline-flex;
	align-items: center;

	& > span {
		max-height: 1.2rem;
		overflow: hidden;
	}
`;

export const InfoDiv = styled.div`
	padding-right: 24px;
	width: 100%;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.white_primary};

		& > a {
			cursor: pointer;
			display: block;

			& > span {
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				display: -webkit-box;
				font-family: Roboto, Arial, sans-serif;
				font-size: 0.9rem;
				font-weight: 500;
				line-height: 1.4rem;
				margin: 0 0 4px;
				max-height: 4rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: normal;
			}
		}
	}
`;

export const InfoMetaDiv = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme: { colors } }) => colors.gray};

	& > h4 {
		font-size: 0.8rem;
		line-height: 1.4rem;
	}

	& > h5 {
		font-size: 0.8rem;

		& > span:last-of-type::before {
			content: "•";
			margin: 0 4px;
		}
	}
`;

export const OptionButtonDiv = styled.div`
	& > button {
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
`;
