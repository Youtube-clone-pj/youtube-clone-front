import { Link } from "react-router-dom";

import { RecordIcon } from "@/constants/Icon/icon";

import {
	LayoutDiv,
	InnerDiv,
	SectionDiv,
	TitleDiv,
	TitleInnerDiv,
	ButtonDiv,
	ContentDiv,
} from "./MyContent.styles";

const MyContent = () => {
	return (
		<LayoutDiv>
			<InnerDiv>
				<SectionDiv>
					<TitleDiv>
						<TitleInnerDiv>
							<h2>
								<Link to="/feed/history">
									<RecordIcon />
									기록
								</Link>
							</h2>
							<ButtonDiv>
								<button>모두 보기</button>
							</ButtonDiv>
						</TitleInnerDiv>
					</TitleDiv>
					<ContentDiv></ContentDiv>
				</SectionDiv>
			</InnerDiv>
		</LayoutDiv>
	);
};

export default MyContent;
