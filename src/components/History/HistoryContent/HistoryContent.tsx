import {
	HistoryContentLayout,
	TitleDiv,
	ContentDiv,
} from "./HistoryContent.styles";
import HistoryShorts from "./HistoryShorts/HistoryShorts";
import HistoryVideo from "./HistoryVideo/HistoryVideo";

const HistoryContent = () => {
	return (
		<HistoryContentLayout>
			<TitleDiv>오늘</TitleDiv>
			<ContentDiv>
				<HistoryShorts />
				<HistoryVideo />
			</ContentDiv>
		</HistoryContentLayout>
	);
};

export default HistoryContent;
