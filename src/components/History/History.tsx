import {
	HistoryLayout,
	TitleDiv,
	TitleInnerDiv,
	ContentDiv,
	ContentInnerDiv,
} from "./History.styles";
import HistoryContent from "./HistoryContent/HistoryContent";
import HistorySide from "./HistorySide/HistorySide";

const History = () => {
	return (
		<HistoryLayout>
			<TitleDiv>
				<TitleInnerDiv>
					<h1>시청 기록</h1>
				</TitleInnerDiv>
			</TitleDiv>
			<ContentDiv>
				<ContentInnerDiv>
					<HistoryContent />
				</ContentInnerDiv>
				<HistorySide />
			</ContentDiv>
		</HistoryLayout>
	);
};

export default History;
