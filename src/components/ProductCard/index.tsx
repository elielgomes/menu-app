import React from "react";
import {
	Flex,
	Heading,
	Box,
} from "@chakra-ui/react";
import { IProduct } from "@/interfaces";
import Image from "next/image";

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
		<Box
			borderRadius={30}
			overflow="hidden"
			position="absolute"
			height="80px"
			width="80px"
			left="-40px"
			boxShadow="0px 0px 10px #00000034"
			bgColor="gray.300"
		>
			<Image
				alt="Teste"
				src={image}
				height={80}
				width={80}
				loading="lazy"
			/>
		</Box>
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
