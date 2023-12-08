import styled from "styled-components";

export const LayoutDiv = styled.div`
	width: 1284px;
	display: flex;
	flex: none;
	margin: 0 auto 16px;
`;

export const InnerDiv = styled.div`
	flex: 1;
	flex-basis: 1e-9px;
	max-width: 100%;
	min-width: 0;
`;

export const SectionDiv = styled.div`
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.white_alpha_20};

	&:last-of-type {
		border: none;
	}
`;

export const TitleDiv = styled.div`
	margin-top: 24px;
`;

export const TitleInnerDiv = styled.div`
	height: 20px;
	color: ${({ theme: { colors } }) => colors.white_primary};
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > h2 > a {
		display: flex;
		align-items: center;
		gap: 16px;
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 20px;
		line-height: 28px;
		font-weight: ${({ theme: { font } }) => font.weight.bold};
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const ButtonDiv = styled.div`
	& > button {
		font-size: 14px;
		font-weight: ${({ theme: { font } }) => font.weight.bold};
		line-height: 36px;
		border-radius: 18px;
		height: 36px;
		padding: 0 16px;
		color: ${({ theme: { colors } }) => colors.blue_primary};
		background-color: transparent;
		cursor: pointer;

		&:hover {
			background-color: rgb(42, 56, 78);
		}
	}
`;

export const ContentDiv = styled.div`
	margin-top: 24px;
`;

export const VideoListDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
