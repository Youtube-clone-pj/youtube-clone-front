import { useState } from "react";

import { SORT_OPTION_TYPE } from "@/constants/data/SortOption";

import { DropdownLayout, DropdownDiv } from "./SortDropdown.styles";

const SortDropdown = () => {
	const [sortOption, setSortOption] = useState("인기 댓글순");

	return (
		<DropdownLayout>
			<DropdownDiv>
				<ul>
					{SORT_OPTION_TYPE.map((list) => (
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
		</DropdownLayout>
	);
};

export default SortDropdown;
