import React from "react";
import {
	Flex,
	Box,
	Heading,
} from "@chakra-ui/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

interface IProps {
	title: string;
	image: string;
	route: string;
}

export const MenuCard: React.FC<IProps> = ({ title, image, route }) => (

	<Flex
		as={Link}
		href={route}
		bgColor="white"
		w="80%"
		height="100px"
		borderRadius={20}
		boxShadow="0px 5px 10px #00000034"
		alignItems="center"
		position="relative"
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
		<Heading
			color="secondary.400"
			position="absolute"
			left="60px"
		>
			{title}
		</Heading>
		<Box
			as={MdOutlineArrowForwardIos}
			padding="5px"
			width="40px"
			height="40px"
			borderRadius="100%"
			position="absolute"
			bg="white"
			color="#803120"
			boxShadow="0px 0px 10px #00000034"
			right="-20px"
		/>
	</Flex>
);
