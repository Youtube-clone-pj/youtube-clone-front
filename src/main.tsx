import ReactDOM from "react-dom/client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import theme from "./styles/theme.ts";

import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<RecoilRoot>
			<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<App />
				</ThemeProvider>
			</GoogleOAuthProvider>
			<ReactQueryDevtools initialIsOpen={true} />
		</RecoilRoot>
	</QueryClientProvider>,
);
