import { useLocation } from "react-router-dom";

import { locateCheck } from "@/utils/locateCheck";

import { PlaylistLayout } from "./Playlist.styles";
import PlaylistContent from "./PlaylistContent/PlaylistContent";
import PlaylistSidebar from "./PlaylistSidebar/PlaylistSidebar";

export type locationProp = {
	locate: boolean;
};

const Playlist = () => {
	const location = useLocation();

	const playlistLater = locateCheck(location.search);

	return (
		<PlaylistLayout>
			<PlaylistSidebar locate={playlistLater} />
			<PlaylistContent locate={playlistLater} />
		</PlaylistLayout>
	);
};

export default Playlist;
