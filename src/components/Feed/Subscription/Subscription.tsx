import { FlowBoardIcon, FlowListIcon } from "@/constants/Icon/icon";

import {
	LayoutDiv,
	TitleDiv,
	TitleInnerDiv,
	MenuDiv,
	FlowButtonDiv,
} from "./Subscroption.styles";

const Subscription = () => {
	return (
		<LayoutDiv>
			<TitleDiv>
				<TitleInnerDiv>
					<h2>최신순</h2>
					<MenuDiv>
						<button>관리</button>
						<FlowButtonDiv>
							<button>
								<FlowBoardIcon />
							</button>
							<button>
								<FlowListIcon />
							</button>
						</FlowButtonDiv>
					</MenuDiv>
				</TitleInnerDiv>
			</TitleDiv>
		</LayoutDiv>
	);
};

export default Subscription;
