import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/themes";
import ActiveSectionProvider from "@/contexts/activeSection";
import SearchInputProvider from "@/contexts/searchInput";

const App = ({ Component, pageProps }: AppProps) => (
	<SearchInputProvider>
		<ActiveSectionProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</ActiveSectionProvider>
	</SearchInputProvider>
);

export default App;
