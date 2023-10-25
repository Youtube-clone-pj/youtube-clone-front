import { Outlet } from "react-router-dom";

import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

const Root = () => {
	return (
		<>
			<Header />
			<Sidebar />
			<Outlet />
		</>
	);
};

export default Root;
