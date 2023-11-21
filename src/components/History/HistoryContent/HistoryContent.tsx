import {
	HistoryContentLayout,
	TitleDiv,
	ContentDiv,
} from "./HistoryContent.styles";
import HistoryShorts from "./HistoryShorts/HistoryShorts";

const HistoryContent = () => {
	return (
		<HistoryContentLayout>
			<TitleDiv>오늘</TitleDiv>
			<ContentDiv>
				<HistoryShorts />
			</ContentDiv>
		</HistoryContentLayout>
	);
};

export default HistoryContent;
