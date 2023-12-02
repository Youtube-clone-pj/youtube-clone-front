import { useLocation } from "react-router-dom";

import { SidebarData } from "@/constants/data/SidebarData";
import { pathnameCheck } from "@/utils/pathnameCheck";

import {
	SidebarListLayout,
	ContentUl,
	ContentLi,
	ItemDiv,
} from "./SidebarList.styles";

interface listDataType {
	icon: JSX.Element;
	title: string;
	link: string;
}

const SidebarList = () => {
	const location = useLocation();

	const { pathname, search } = location;

	const active = pathnameCheck({ pathname, search });

	return (
		<SidebarListLayout>
			{SidebarData.map((data) => (
				<ContentUl key={data.title}>
					{data.list.map(({ icon, title, link }: listDataType) => (
						<a key={title} href={link}>
							<ContentLi $active={title === active}>
								<ItemDiv>
									{icon}
									<h2>{title}</h2>
								</ItemDiv>
							</ContentLi>
						</a>
					))}
				</ContentUl>
			))}
		</SidebarListLayout>
	);
};

export default SidebarList;
