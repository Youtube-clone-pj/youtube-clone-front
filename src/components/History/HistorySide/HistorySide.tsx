import {
	HistorySideLayout,
	HistorySideDiv,
	InnerDiv,
	SearchDiv,
	SearchInnerDiv,
	InputDiv,
} from "./HistorySide.styles";

const HistorySide = () => {
	return (
		<HistorySideLayout>
			<HistorySideDiv>
				<InnerDiv>
					<SearchDiv>
						<SearchInnerDiv>
							<InputDiv></InputDiv>
						</SearchInnerDiv>
					</SearchDiv>
				</InnerDiv>
			</HistorySideDiv>
		</HistorySideLayout>
	);
};

export default HistorySide;
