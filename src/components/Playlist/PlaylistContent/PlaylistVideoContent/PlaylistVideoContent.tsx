import PlaylistVideoCard from "./PlaylistVideoCard/PlaylistVideoCard";
import { PlaylistVideoContentLayout } from "./PlaylistVideoContent.styles";
import { locationProp } from "../../Playlist";

const mockItems = [
	{
		id: 1,
	},
	{
		id: 2,
	},
	{
		id: 3,
	},
	{
		id: 4,
	},
	{
		id: 5,
	},
	{
		id: 6,
	},
	{
		id: 7,
	},
	{
		id: 8,
	},
	{
		id: 9,
	},
	{
		id: 10,
	},
	{
		id: 11,
	},
	{
		id: 12,
	},
	{
		id: 13,
	},
];

const PlaylistVideoContent = ({ locate }: locationProp) => {
	return (
		<PlaylistVideoContentLayout $padding={locate}>
			{mockItems.map((info) => (
				<PlaylistVideoCard id={info.id} key={info.id} locate={locate} />
			))}
		</PlaylistVideoContentLayout>
	);
};

export default PlaylistVideoContent;
