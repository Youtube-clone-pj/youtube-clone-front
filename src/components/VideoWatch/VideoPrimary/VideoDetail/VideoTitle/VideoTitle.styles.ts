import styled from "styled-components";

export const VideoTitleLayout = styled.div`
	color: ${({ theme: { colors } }) => colors.white_primary};
`;

export const VideoTitleDiv = styled.div`
	& > h1 {
		word-break: break-word;
		font-family: "YouTube Sans", "Roboto", sans-serif;
		font-size: 1.6rem;
		line-height: 2rem;
		font-weight: 600;
		overflow: hidden;
		max-height: 5.6rem;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		white-space: normal;
	}
`;

export const TopDiv = styled.div`
	margin-top: -4px;
	display: flex;
`;

export const ProfileDiv = styled.div`
	min-width: calc(50% - 6px);
	flex: 1 1;
	flex-basis: 1e-9px;
	display: flex;
	align-items: center;
	margin: 12px 12px 0 0;
	font-family: "Roboto", "Arial", sans-serif;

	& > a {
		cursor: pointer;
		width: 40px;
		height: 40px;
		margin-right: 12px;

		& > img {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
`;

export const ProfileInfoDiv = styled.div`
	margin-right: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > a > h3 {
		font-size: 1.1rem;
		font-weight: 500;
		color: ${({ theme: { colors } }) => colors.white_primary};
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
	}

	& > h4 {
		font-size: 0.9rem;
		overflow: hidden;
		max-height: 1.8rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: ${({ theme: { colors } }) => colors.gray};
		margin-right: 4px;
	}
`;

export const SubscribeButtonDiv = styled.div`
	& > button {
		font-size: 14px;
		font-weight: 500;
		line-height: 36px;
		border-radius: 18px;
		height: 36px;
		padding: 0 16px;
		color: ${({ theme: { colors } }) => colors.black_primary};
		background-color: ${({ theme: { colors } }) => colors.white_primary};
		cursor: pointer;
	}
`;

export const ButtonDiv = styled.div`
	flex: 1 1 auto;
	min-width: calc(50% - 6px);
	align-items: center;
	justify-content: flex-end;
	margin-right: 0;
	display: flex;
	margin-top: 12px;
`;

export const ButtonInnerDiv = styled.div`
	display: flex;
	gap: 10px;
`;

export const LikeButtonDiv = styled.div`
	display: flex;
`;

export const VideoTitleButton = styled.button`
	font-size: 14px;
	font-weight: 500;
	line-height: 36px;
	border-radius: 18px 0 0 18px;
	height: 36px;
	padding: 0 16px;
	color: ${({ theme: { colors } }) => colors.white_primary};
	background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 8px;
	position: relative;
`;

export const LikeButton = styled(VideoTitleButton)`
	&::after {
		content: "";
		background-color: ${({ theme: { colors } }) => colors.white_alpha_20};
		position: absolute;
		top: 6px;
		right: 0;
		width: 1px;
		height: 24px;
	}
`;

export const DisLikeButton = styled(VideoTitleButton)`
	border-radius: 0 18px 18px 0;
`;

export const ShareButton = styled(VideoTitleButton)`
	border-radius: 18px;
`;

export const MoreButton = styled.button`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	color: ${({ theme: { colors } }) => colors.white_primary};
	background-color: ${({ theme: { colors } }) => colors.white_alpha_10};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	position: relative;
`;
