import React from "react";
import {
	Flex,
	Box,
	Heading,
	Image,
} from "@chakra-ui/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";

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

		<Image
			alt="Teste"
			src={image}
			height="80px"
			width="80px"
			borderRadius={30}
			position="absolute"
			left="-40px"
			boxShadow="0px 0px 10px #00000034"
			loading="lazy"
		/>
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
