import {
	PlaylistContentLayout,
	PlaylistContentDiv,
	InnerDiv,
} from "./PlaylistContent.styles";
import PlaylistSort from "./PlaylistSort/PlaylistSort";

const PlaylistContent = () => {
	return (
		<PlaylistContentLayout>
			<PlaylistContentDiv>
				<InnerDiv>
					<PlaylistSort />
				</InnerDiv>
			</PlaylistContentDiv>
		</PlaylistContentLayout>
	);
};

export default PlaylistContent;
