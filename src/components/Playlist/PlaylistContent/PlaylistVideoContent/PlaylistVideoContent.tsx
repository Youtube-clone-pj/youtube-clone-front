import PlaylistVideoCard from "./PlaylistVideoCard/PlaylistVideoCard";
import { PlaylistVideoContentLayout } from "./PlaylistVideoContent.styles";

const PlaylistVideoContent = () => {
	return (
		<PlaylistVideoContentLayout>
			<PlaylistVideoCard />
		</PlaylistVideoContentLayout>
	);
};

export default PlaylistVideoContent;
