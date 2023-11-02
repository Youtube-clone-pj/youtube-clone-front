import styled from "styled-components";

export const VideoInfoLayout = styled.div`
	color: #f1f1f1;
	margin: 12px 0 24px;
`;

export const VideoInfoDiv = styled.div`
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
		color: #f1f1f1;
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
		color: #aaa;
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
		color: #0f0f0f;
		background-color: #f1f1f1;
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

export const VideoInfoButton = styled.button`
	font-size: 14px;
	font-weight: 500;
	line-height: 36px;
	border-radius: 18px 0 0 18px;
	height: 36px;
	padding: 0 16px;
	color: #f1f1f1;
	background-color: rgb(255, 255, 255, 0.1);
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 8px;
	position: relative;
`;

export const LikeButton = styled(VideoInfoButton)`
	&::after {
		content: "";
		background: rgba(255, 255, 255, 0.2);
		position: absolute;
		top: 6px;
		right: 0;
		width: 1px;
		height: 24px;
	}
`;

export const DisLikeButton = styled(VideoInfoButton)`
	border-radius: 0 18px 18px 0;
`;

export const ShareButton = styled(VideoInfoButton)`
	border-radius: 18px;
`;

export const MoreButton = styled.button`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	color: #f1f1f1;
	background-color: rgb(255, 255, 255, 0.1);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	position: relative;
`;
