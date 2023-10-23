import { SidebarLayout, SidebarDiv, ContentDiv } from "./Sidebar.styles";
import SidebarFooter from "./SidebarFooter";
import SidebarList from "./SidebarList";

const Sidebar = () => {
	return (
		<SidebarLayout>
			<SidebarDiv>
				<ContentDiv>
					<SidebarList />
					<SidebarFooter />
				</ContentDiv>
			</SidebarDiv>
		</SidebarLayout>
	);
};

export default Sidebar;
