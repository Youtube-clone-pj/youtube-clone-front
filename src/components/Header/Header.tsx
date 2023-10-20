import { HeaderMenuIcon, LogoIcon } from "@/constants/icon";

import {
	HeaderLayout,
	HeaderInnerDiv,
	HeaderLeftDiv,
	ButtonDiv,
	LogoDiv,
} from "./Header.styles";
import SearchBar from "./Search/SearchBar";

const Header = () => {
	return (
		<HeaderLayout>
			<HeaderInnerDiv>
				<HeaderLeftDiv>
					<ButtonDiv>
						<button type="button">
							<HeaderMenuIcon />
						</button>
					</ButtonDiv>
					<LogoDiv>
						<LogoIcon />
						<h2>YouTube</h2>
					</LogoDiv>
				</HeaderLeftDiv>
				<SearchBar />
			</HeaderInnerDiv>
		</HeaderLayout>
	);
};

export default Header;
