import ShortsList from "@/components/Shorts/ShortsList";
import VideoList from "@/components/Video/VideoList";
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
			<VideoList marginTop={false} />
			<ShortsList />
		</LayoutDiv>
	);
};

export default Subscription;
