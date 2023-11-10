import { useState } from "react";

import {
	TabLayout,
	TabDividerDiv,
	TabInnerDiv,
	TabItemDiv,
} from "./ChannelTab.styles";

const ChannelTab = () => {
	const [tab, setTab] = useState("홈");

	return (
		<TabLayout>
			<TabDividerDiv />
			<TabInnerDiv>
				<TabItemDiv onClick={() => setTab("홈")} $active={tab === "홈"}>
					홈
				</TabItemDiv>
				<TabItemDiv
					onClick={() => setTab("재생목록")}
					$active={tab === "재생목록"}
				>
					재생목록
				</TabItemDiv>
				<TabItemDiv onClick={() => setTab("채널")} $active={tab === "채널"}>
					채널
				</TabItemDiv>
			</TabInnerDiv>
		</TabLayout>
	);
};

export default ChannelTab;
