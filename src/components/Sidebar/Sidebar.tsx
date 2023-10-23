import { SidebarLayout, SidebarDiv, ContentDiv } from "./Sidebar.styles";
import SidebarList from "./SidebarList";

const Sidebar = () => {
	return (
		<SidebarLayout>
			<SidebarDiv>
				<ContentDiv>
					<SidebarList />
				</ContentDiv>
			</SidebarDiv>
		</SidebarLayout>
	);
};

export default Sidebar;
