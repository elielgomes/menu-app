import React from "react";
import { Flex, Heading, Image, Box } from "@chakra-ui/react";
import { IProduct } from "@/interfaces";

export const ProductCard: React.FC<IProduct> = ({ name, image, price }) => (
	<Flex
		px="5px"
		alignItems="center"
		justifyContent="space-between"
		gap="10px"
		bgColor="white"
		height="100px"
		borderRadius={20}
		boxShadow="0px 5px 10px #00000034"
		position="relative"
		width="85%"
	>
		<Image
			alt={name}
			src={image}
			width="80px"
			height="80px"
			borderRadius={30}
			position="absolute"
			left="-40px"
			boxShadow="0px 0px 10px #00000034"
			loading="lazy"
		/>
		<Box
			position="absolute"
			left="50px"
			width={{ base: 110, md: 130, lg: 180 }}
			maxHeight={{ base: 100, md: 120 }}>
			<Heading
				color="secondary.400"
				fontSize={{ base: 18, md: 20 }}
				textAlign="left"
				textTransform="capitalize"
			>
				{name}
			</Heading>
		</Box>
		<Box
			position="absolute"
			right="10px"
			width={{ base: "80px", md: "90px" }}
		>
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
