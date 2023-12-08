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
	VideoListDiv,
} from "./MyContent.styles";
import MyContentVideoCard from "../MyContentVideoCard/MyContentVideoCard";

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
					<ContentDiv>
						<VideoListDiv>
							{mockItems.map((info) => (
								<MyContentVideoCard id={info.id} key={info.id} />
							))}
						</VideoListDiv>
					</ContentDiv>
				</SectionDiv>
			</InnerDiv>
		</LayoutDiv>
	);
};

export default MyContent;
