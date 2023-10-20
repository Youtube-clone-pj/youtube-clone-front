import {
	HeaderDiv,
	HeaderInnerDiv,
	HeaderLeftDiv,
	ButtonDiv,
} from "./Header.styles";
import { HeaderMenuIcon } from "@/constants/icon";

const Header = () => {
	return (
		<HeaderDiv>
			<HeaderInnerDiv>
				<HeaderLeftDiv>
					<ButtonDiv>
						<button type="button">
							<HeaderMenuIcon />
						</button>
					</ButtonDiv>
				</HeaderLeftDiv>
			</HeaderInnerDiv>
		</HeaderDiv>
	);
};

export default Header;
