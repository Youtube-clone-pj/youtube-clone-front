import { SearchIcon } from "@/constants/icon";

import { SearchBarLayout, SearchDiv } from "./SearchBar.styles";

const SearchBar = () => {
	return (
		<SearchBarLayout>
			<SearchDiv>
				<form>
					<input type="text" placeholder="검색" />
				</form>
				<button>
					<SearchIcon />
				</button>
			</SearchDiv>
		</SearchBarLayout>
	);
};

export default SearchBar;
