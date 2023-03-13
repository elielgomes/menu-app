import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { IProduct } from "@/interfaces";

export const ProductCard: React.FC<IProduct> = ({ name, image, price }) => (
	<Flex
		px="5px"
		alignItems="center"
		justifyContent="space-between"
		gap="10px"
	>
		<Image
			alt={name}
			src={image}
			width={{ base: 100, md: 120 }}
			height={{ base: 100, md: 120 }}
			borderRadius={30}
		/>
		<Box width={{ base: 110, md: 130, lg: 180 }} maxHeight={{ base: 100, md: 120 }}>
			<Heading
				color="secondary.400"
				fontSize={{ base: 18, md: 20 }}
				textAlign="left"
				textTransform="capitalize"
			>
				{name}
			</Heading>
		</Box>
		<Box width={{ base: "80px", md: "90px" }}>
			<Heading
				color="gray.400"
				fontSize={{ base: 18, md: 20 }}
				textAlign="end"
			>
				R${price}
			</Heading>
		</Box>
	</Flex>
);
