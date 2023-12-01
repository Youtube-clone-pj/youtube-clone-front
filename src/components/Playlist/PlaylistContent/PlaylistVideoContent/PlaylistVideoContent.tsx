import PlaylistVideoCard from "./PlaylistVideoCard/PlaylistVideoCard";
import { PlaylistVideoContentLayout } from "./PlaylistVideoContent.styles";

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

const PlaylistVideoContent = () => {
	return (
		<PlaylistVideoContentLayout>
			{mockItems.map((info) => (
				<PlaylistVideoCard {...info} key={info.id} />
			))}
		</PlaylistVideoContentLayout>
	);
};

export default PlaylistVideoContent;
