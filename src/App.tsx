import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
	LandingPage,
	VideoWatchPage,
	ShortsPage,
	StudioPage,
	Root,
} from "./pages";

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
				path: "/shorts/:id",
				element: <ShortsPage />,
			},
		],
	},
	{
		path: "/watch/:id",
		element: <VideoWatchPage />,
	},
	{
		path: "/studio",
		element: <StudioPage />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
