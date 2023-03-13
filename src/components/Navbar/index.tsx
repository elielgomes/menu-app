import React from "react";
import { Flex } from "@chakra-ui/react";
import { SearchInput, ScrollButtons } from "@/components";

export const Navbar: React.FC = () => (
	<Flex
		w="100%"
		flexDirection="column"
		alignItems="center"
		bg="gray.50"
		position="sticky"
		top={0}
		gap="10px"
		pt="25px"
		zIndex={999}
		boxShadow="0px 0px 20px #0000002b"
	>
		<SearchInput />
		<ScrollButtons />
	</Flex>
);
