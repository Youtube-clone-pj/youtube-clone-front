import ChannelBio from "@/components/Channel/ChannelBio/ChannelBio";
import ChannelContent from "@/components/Channel/ChannelContent/ChannelContent";
import ChannelTab from "@/components/Channel/ChannelTab/ChannelTab";

import { ChannelPageLayout } from "./ChannelPage.styles";

const ChannelPage = () => {
	return (
		<ChannelPageLayout>
			<ChannelBio />
			<ChannelTab />
			<ChannelContent />
		</ChannelPageLayout>
	);
};

export default ChannelPage;
