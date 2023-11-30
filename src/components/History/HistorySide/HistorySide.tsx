import {
	SearchIcon,
	HistoryDeleteIcon,
	HistoryStopIcon,
} from "@/constants/Icon/icon";

import {
	HistorySideLayout,
	HistorySideDiv,
	InnerDiv,
	SearchDiv,
	SearchInnerDiv,
	InputDiv,
	SearchButtonDiv,
	SearchInputDiv,
	ButtonUl,
	ButtonLi,
	ButtonInnerDiv,
	ButtonTextDiv,
} from "./HistorySide.styles";

const HistorySide = () => {
	return (
		<HistorySideLayout>
			<HistorySideDiv>
				<InnerDiv>
					<SearchDiv>
						<SearchInnerDiv>
							<form>
								<InputDiv>
									<SearchButtonDiv>
										<button>
											<SearchIcon />
										</button>
									</SearchButtonDiv>
									<SearchInputDiv>
										<input type="text" placeholder="시청 기록 검색" />
									</SearchInputDiv>
								</InputDiv>
							</form>
						</SearchInnerDiv>
					</SearchDiv>
					<ButtonUl>
						<ButtonLi>
							<ButtonInnerDiv>
								<HistoryDeleteIcon />
								<ButtonTextDiv>시청 기록 지우기</ButtonTextDiv>
							</ButtonInnerDiv>
						</ButtonLi>
						<ButtonLi>
							<ButtonInnerDiv>
								<HistoryStopIcon />
								<ButtonTextDiv>시청 기록 일시중지</ButtonTextDiv>
							</ButtonInnerDiv>
						</ButtonLi>
					</ButtonUl>
				</InnerDiv>
			</HistorySideDiv>
		</HistorySideLayout>
	);
};

export default HistorySide;
