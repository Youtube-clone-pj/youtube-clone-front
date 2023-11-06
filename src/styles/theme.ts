import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
	colors: {
		black_primary: "#0f0f0f",
		black_secondary: "#282828",
		black_03: "#212121",
		black_04: "#272727", // 393939
		black_05: "#303030", // 48 48 48
		white_primary: "#f1f1f1",
		gray_primary: "#717171",
		gray_secondary: "#808080", // 128 128 128
		red_primary: "#ff4e45",
		blue_primary: "#3ea6ff",
		gray: "#aaa",
		white: "#fff",
		black: "#000",
		red: "#f00",
		black_alpha_10: "rgba(0,0,0,0.1)",
		black_alpha_80: "rgba(0,0,0,0.8)",
		white_alpha_08: "rgba(255,255,255,0.08)",
		white_alpha_10: "rgba(255,255,255,0.1)",
		white_alpha_20: "rgba(255,255,255,0.2)",
	},
	font: {
		weight: {
			regular: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			extrabold: "800",
			black: "900",
		},
	},
};

export default theme;
