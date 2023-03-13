import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./Components";

export const theme = extendTheme(
	{
		styles: {
			global: {
				"html, body": {
					fontFamily: "Roboto, sans-serif",
					bgColor: "gray.50",
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
