import { SidebarData } from "@/constants/data/SidebarData";

import {
	SidebarLayout,
	SidebarDiv,
	ContentUl,
	ItemDiv,
} from "./Sidebar.styles";

const Sidebar = () => {
	return (
		<SidebarLayout>
			<SidebarDiv>
				<ContentUl>
					{SidebarData.map((data) => (
						<a href={data.link}>
							<li key={data.title}>
								<ItemDiv>
									{data.icon}
									<h2>{data.title}</h2>
								</ItemDiv>
							</li>
						</a>
					))}
				</ContentUl>
			</SidebarDiv>
		</SidebarLayout>
	);
};

export default Sidebar;
