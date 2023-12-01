import {
	PlaylistContentLayout,
	PlaylistContentDiv,
	InnerDiv,
} from "./PlaylistContent.styles";
import PlaylistSort from "./PlaylistSort/PlaylistSort";
import PlaylistVideoContent from "./PlaylistVideoContent/PlaylistVideoContent";

const PlaylistContent = () => {
	return (
		<PlaylistContentLayout>
			<PlaylistContentDiv>
				<InnerDiv>
					<PlaylistSort />
					<PlaylistVideoContent />
				</InnerDiv>
			</PlaylistContentDiv>
		</PlaylistContentLayout>
	);
};

export default PlaylistContent;
