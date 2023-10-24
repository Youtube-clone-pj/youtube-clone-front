import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";
import darkTheme from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={darkTheme}>
		<GlobalStyles />
		<App />
	</ThemeProvider>,
);
