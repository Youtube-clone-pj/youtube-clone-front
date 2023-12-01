import { useState } from "react";

import { SORT_OPTION_TYPE_PLAY_LIST } from "@/constants/data/SortOption";

import {
	PlaylistSortDropdownLayout,
	DropdownDiv,
} from "./PlaylistSortDropdown.styles";

const PlaylistSortDropdown = () => {
	const [sortOption, setSortOption] = useState("추가된 날짜(최신순)");

	return (
		<PlaylistSortDropdownLayout>
			<DropdownDiv>
				<ul>
					{SORT_OPTION_TYPE_PLAY_LIST.map((list) => (
						<li
							onClick={() => setSortOption(list.data)}
							className={sortOption === list.data ? "active" : ""}
							key={list.data}
						>
							<a href="">{list.data}</a>
						</li>
					))}
				</ul>
			</DropdownDiv>
		</PlaylistSortDropdownLayout>
	);
};

export default PlaylistSortDropdown;
