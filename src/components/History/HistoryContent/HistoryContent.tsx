import BaseShorts from "@/components/Common/Shorts/BaseShorts";

import { HistoryContentLayout, TitleDiv } from "./HistoryContent.styles";

const HistoryContent = () => {
	return (
		<HistoryContentLayout>
			<TitleDiv>오늘</TitleDiv>
			<BaseShorts />
		</HistoryContentLayout>
	);
};

export default HistoryContent;
