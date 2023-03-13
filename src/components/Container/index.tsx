import React from "react";
import { Flex } from "@chakra-ui/react";


interface IProps {
	children: React.ReactNode;
}
export const Container: React.FC<IProps> = ({ children }) => (
	<Flex
		maxW="475px"
		minHeight="100vh"
		margin="0 auto"
		flexDirection="column"
		alignItems="center"
	>
		{children}
	</Flex>
);
