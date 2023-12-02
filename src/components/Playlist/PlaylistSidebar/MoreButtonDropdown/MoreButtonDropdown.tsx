import { PlusIcon, MinusCircleIcon } from "@/constants/Icon/icon";

import {
	MoreButtonDropdownLayout,
	DropdownDiv,
} from "./MoreButtonDropdown.styles";

const DropdownData = [
	{
		icon: <PlusIcon />,
		data: "동영상 추가",
	},
	{
		icon: <MinusCircleIcon />,
		data: "시청한 동영상 삭제",
	},
];

const MoreButtonDropdown = () => {
	return (
		<MoreButtonDropdownLayout>
			<DropdownDiv>
				<ul>
					{DropdownData.map((list) => (
						<li key={list.data}>
							<a href="">
								{list.icon}
								<span>{list.data}</span>
							</a>
						</li>
					))}
				</ul>
			</DropdownDiv>
		</MoreButtonDropdownLayout>
	);
};

export default MoreButtonDropdown;
