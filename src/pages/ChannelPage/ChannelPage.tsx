import { useState } from "react";

import {
	ChannelPageLayout,
	ChannelTopDiv,
	TopInnerDiv,
	ProfileDiv,
	InfoDiv,
	BioDiv,
	ButtonDiv,
	TabDiv,
	TabDividerDiv,
	TabInnerDiv,
	TabItemDiv,
} from "./ChannelPage.styles";

const ChannelPage = () => {
	const [tab, setTab] = useState("홈");

	return (
		<ChannelPageLayout>
			<ChannelTopDiv>
				<TopInnerDiv>
					<ProfileDiv>
						<a href="#">
							<img
								src="https://yt3.ggpht.com/mut5Yu6ZJVe6YKSKOPkBF6XtWzEpKspOfl3WESzhHa40hy0u8RYPW7S6jy4X5yWCDEtrDxH6Cw=s88-c-k-c0x00ffffff-no-rj"
								alt="profile"
							/>
						</a>
					</ProfileDiv>
					<InfoDiv>
						<BioDiv>
							<h2>김준식</h2>
							<h3>@user-bj5em7yz5w</h3>
							<p>채널 description 공간</p>
						</BioDiv>
						<ButtonDiv>
							<button>채널 맞춤 설정</button>
							<button>동영상 관리</button>
						</ButtonDiv>
					</InfoDiv>
				</TopInnerDiv>
			</ChannelTopDiv>
			<TabDiv>
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
			</TabDiv>
		</ChannelPageLayout>
	);
};

export default ChannelPage;
