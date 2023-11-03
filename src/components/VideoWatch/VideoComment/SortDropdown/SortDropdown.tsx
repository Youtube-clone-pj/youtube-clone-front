import { useState } from "react";

import { SORT_OPTION_TYPE } from "@/constants/data/SortOption";

import { DropdownLayout, DropdownDiv } from "./SortDropdown.styles";

const SortDropdown = () => {
	const [sortOption, setSortOption] = useState(SORT_OPTION_TYPE.BEST);

	return (
		<DropdownLayout>
			<DropdownDiv>
				<ul>
					<li
						onClick={() => setSortOption(SORT_OPTION_TYPE.BEST)}
						className={sortOption === SORT_OPTION_TYPE.BEST ? "active" : ""}
					>
						<a href="">{SORT_OPTION_TYPE.BEST}</a>
					</li>
					<li
						onClick={() => setSortOption(SORT_OPTION_TYPE.LATEST)}
						className={sortOption === SORT_OPTION_TYPE.LATEST ? "active" : ""}
					>
						<a href="">{SORT_OPTION_TYPE.LATEST}</a>
					</li>
				</ul>
			</DropdownDiv>
		</DropdownLayout>
	);
};

export default SortDropdown;
