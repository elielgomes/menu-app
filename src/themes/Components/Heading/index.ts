import { ComponentStyleConfig } from "@chakra-ui/react";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
	weight: ["400", "700", "900"],
	style: "normal",
	subsets: ["latin"],
});

export const Heading: ComponentStyleConfig = {
	baseStyle: {
		fontFamily: roboto.style.fontFamily,
	},
};
