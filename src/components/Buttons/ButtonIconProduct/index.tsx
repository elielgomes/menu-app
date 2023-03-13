import React from "react";
import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IProps {
	icon: IconType;
	onClick: () => void;
	isActive: boolean;
}

export const ButtonIconProduct: React.FC<IProps> = ({ icon, onClick, isActive }) => (
	<>
		<Button
			onClick={onClick}
			width="100px"
			height="100px"
			borderRadius={100}
			border="2px solid"
			borderColor="gray.200"
			bgColor={isActive ? "primary.400" : "gray.50"}
			boxShadow="0px 0px 20px #00000018"
			transition="all 200ms"
			_hover={{
				bgColor: "none",
			}}
		>
			<Icon
				className="svg-icon"
				as={icon}
				w="50px"
				height="50px"
				color={isActive ? "gray.50" : "gray.300"}
				transition="all 200ms"
			/>
		</Button>
	</>
);

