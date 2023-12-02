import {
	PlaylistContentLayout,
	PlaylistContentDiv,
	InnerDiv,
} from "./PlaylistContent.styles";
import PlaylistSort from "./PlaylistSort/PlaylistSort";
import PlaylistTagbar from "./PlaylistTagbar/PlaylistTagbar";
import PlaylistVideoContent from "./PlaylistVideoContent/PlaylistVideoContent";
import { locationProp } from "../Playlist";

const PlaylistContent = ({ locate }: locationProp) => {
	return (
		<PlaylistContentLayout>
			<PlaylistContentDiv>
				<InnerDiv>
					{locate ? <PlaylistSort /> : <PlaylistTagbar />}
					<PlaylistVideoContent locate={locate} />
				</InnerDiv>
			</PlaylistContentDiv>
		</PlaylistContentLayout>
	);
};

export default PlaylistContent;
