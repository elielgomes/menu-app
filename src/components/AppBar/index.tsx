import React from "react";
import {
	Flex,
	Heading,
	Box,
} from "@chakra-ui/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from "next/router";

interface IProps {
	route: string;
}

export const AppBar: React.FC<IProps> = ({ route }) => {

	const router = useRouter();

	return (

		<Flex
			width="100%"
			height="60px"
			bgColor="#803120"
			position="fixed"
			justifyContent="center"
			alignItems="center"
			zIndex={999}
		>
			<Box
				as={MdOutlineArrowBackIos}
				color="gray.50"
				width="30px"
				height="30px"
				position="absolute"
				left="20px"
				top="15px"
				onClick={() => router.back()}
			/>
			<Heading color="gray.50">
				{route}
			</Heading>
		</Flex>
	);
};
