import { SidebarData } from "@/constants/data/SidebarData";

import { SidebarListLayout, ContentUl, ItemDiv } from "./SidebarList.styles";

interface listDataType {
	icon: JSX.Element;
	title: string;
	link: string;
}

const SidebarList = () => {
	return (
		<SidebarListLayout>
			{SidebarData.map((data) => (
				<ContentUl key={data.title}>
					{data.list.map(({ icon, title, link }: listDataType) => (
						<a key={title} href={link}>
							<li>
								<ItemDiv>
									{icon}
									<h2>{title}</h2>
								</ItemDiv>
							</li>
						</a>
					))}
				</ContentUl>
			))}
		</SidebarListLayout>
	);
};

export default SidebarList;
