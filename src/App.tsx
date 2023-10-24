import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LandingPage, VideoDetailPage, Root } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "/detail/:id",
				element: <VideoDetailPage />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
