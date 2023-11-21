import { ShortsListLayout, ShortsListRowDiv } from "./ShortsList.styles";
import BaseShorts from "../Common/Shorts/BaseShorts";

export interface shortsCardType {
	shortsId: number;
	shortsTitle: string;
	shortsView: string;
	shortsVideoThumbnail: string;
}

const ShortsList = () => {
	return (
		<ShortsListLayout>
			<ShortsListRowDiv>
				<BaseShorts />
			</ShortsListRowDiv>
		</ShortsListLayout>
	);
};

export default ShortsList;
