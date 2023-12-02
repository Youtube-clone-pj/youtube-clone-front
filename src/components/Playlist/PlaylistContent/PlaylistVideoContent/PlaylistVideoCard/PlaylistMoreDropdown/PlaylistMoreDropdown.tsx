import {
	PlaylistAddIcon,
	PlaylistSaveIcon,
	HistoryDeleteIcon,
	ShareIcon,
} from "@/constants/Icon/icon";

import {
	PlaylistMoreDropdownLayout,
	DropdownDiv,
} from "./PlaylistMoreDropdown.styles";

const DropDownData = [
	{
		icon: <PlaylistAddIcon />,
		data: "현재 재생목록에 추가",
	},
	{
		icon: <PlaylistSaveIcon />,
		data: "재생목록에 저장",
	},
	{
		icon: <HistoryDeleteIcon />,
		data: "나중에 볼 동영상에서 삭제",
	},
	{
		icon: <ShareIcon />,
		data: "공유",
	},
];

const PlaylistMoreDropdown = () => {
	return (
		<PlaylistMoreDropdownLayout>
			<DropdownDiv>
				<ul>
					{DropDownData.map((list) => (
						<li key={list.data}>
							<a href="">
								{list.icon}
								<span>{list.data}</span>
							</a>
						</li>
					))}
				</ul>
			</DropdownDiv>
		</PlaylistMoreDropdownLayout>
	);
};

export default PlaylistMoreDropdown;
