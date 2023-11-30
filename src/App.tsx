import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
	LandingPage,
	VideoWatchPage,
	ShortsPage,
	StudioPage,
	Root,
	ChannelPage,
	HistoryPage,
	PlaylistPage,
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
			{
				path: "/channel",
				element: <ChannelPage />,
			},
			{
				path: "/feed/history",
				element: <HistoryPage />,
			},
			{
				path: "/playlist",
				element: <PlaylistPage />,
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
