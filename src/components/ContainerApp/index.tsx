import React from "react";
import { Flex } from "@chakra-ui/react";


interface IProps {
	children: React.ReactNode;
	isHome?: boolean;
}

export const ContainerApp: React.FC<IProps> = ({ children, isHome }) => (
	<Flex
		maxW={425}
		minH="100vh"
		flexDirection="column"
		alignItems="end"
		margin="0 auto"
		bgImage="linear-gradient(to right, #803120 30%, #f5f5f5 30%)"
		gap={"30px"}
		py={isHome ? "100px" : "80px"}
		pr={isHome ? "30px" : "20px"}
	>
		{children}
	</Flex >
);
