import ChannelBio from "@/components/Channel/ChannelBio/ChannelBio";
import ChannelTab from "@/components/Channel/ChannelTab/ChannelTab";

import { ChannelPageLayout } from "./ChannelPage.styles";

const ChannelPage = () => {
	return (
		<ChannelPageLayout>
			<ChannelBio />
			<ChannelTab />
		</ChannelPageLayout>
	);
};

export default ChannelPage;
