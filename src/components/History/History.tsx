import {
	HistoryLayout,
	TitleDiv,
	TitleInnerDiv,
	ContentDiv,
	ContentInnerDiv,
} from "./History.styles";
import HistoryContent from "./HistoryContent/HistoryContent";

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
			</ContentDiv>
		</HistoryLayout>
	);
};

export default History;
