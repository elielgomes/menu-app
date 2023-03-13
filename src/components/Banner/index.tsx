import React from "react";
import {
	Box,
	Flex,
	Icon,
	Heading,
} from "@chakra-ui/react";
import { IoRestaurant } from "react-icons/io5";

export const Banner: React.FC = () => (
	<Box
		bgImage="url(banner.svg)"
		bgPosition="center"
		width="100%"
		height="180px"
	>
		<Flex
			w="100%"
			justifyContent="center"
			alignItems="center"
		>
			<Icon
				as={IoRestaurant}
				w="50px"
				mt="10px"
				height="50px"
				color="gray.50"
			/>
			<Heading
				fontFamily="'Roboto', sans-serif"
				color="gray.50"
				fontSize="60px"
				textAlign="center"
				pt="20px"
			>
				Cardápio
			</Heading>
		</Flex>
	</Box>
);
