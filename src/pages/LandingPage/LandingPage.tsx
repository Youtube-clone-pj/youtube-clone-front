import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Tagbar from "@/components/Tagbar/Tagbar";
import VideoList from "@/components/Video/VideoList";

import { ContentDiv } from "./LandingPage.styles";

const LandingPage = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<ContentDiv>
				<Tagbar />
				<VideoList />
			</ContentDiv>
		</>
	);
};

export default LandingPage;
