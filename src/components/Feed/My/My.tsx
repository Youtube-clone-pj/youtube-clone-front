import ChannelBio from "@/components/Channel/ChannelBio/ChannelBio";

import { LayoutDiv } from "./My.styles";
import MyContent from "./MyContent/MyContent";

const My = () => {
	return (
		<LayoutDiv>
			<ChannelBio />
			<MyContent />
		</LayoutDiv>
	);
};

export default My;
