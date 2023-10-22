import {
	HeaderMenuIcon,
	LogoIcon,
	HeaderMoreIcon,
	LoginIcon,
} from "@/constants/Icon/icon";

import {
	HeaderLayout,
	HeaderInnerDiv,
	HeaderLeftDiv,
	ButtonDiv,
	LogoDiv,
	HeaderRightDiv,
	LoginDiv,
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

				<HeaderRightDiv>
					<ButtonDiv>
						<button type="button">
							<HeaderMoreIcon color="#fff" />
						</button>
					</ButtonDiv>
					<LoginDiv>
						<LoginIcon />
						<h2>로그인</h2>
					</LoginDiv>
				</HeaderRightDiv>
			</HeaderInnerDiv>
		</HeaderLayout>
	);
};

export default Header;
