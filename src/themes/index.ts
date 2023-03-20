import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./Components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
	weight: ["400", "700", "900"],
	style: "normal",
	subsets: ["latin"],
});

export const theme = extendTheme(
	{
		styles: {
			global: {
				"html, body": {
					fontFamily: roboto.style.fontFamily,
					bgColor: "gray.50",
					overflowX: "hidden",
				},
			},
		},
		colors,
		components,
		breakpoints: {
			sm: "320px",
			md: "375px",
			lg: "425px",
		},
	},
);
