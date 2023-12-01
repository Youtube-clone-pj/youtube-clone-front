import { PlaylistLayout } from "./Playlist.styles";
import PlaylistContent from "./PlaylistContent/PlaylistContent";
import PlaylistSidebar from "./PlaylistSidebar/PlaylistSidebar";

const Playlist = () => {
	return (
		<PlaylistLayout>
			<PlaylistSidebar />
			<PlaylistContent />
		</PlaylistLayout>
	);
};

export default Playlist;
