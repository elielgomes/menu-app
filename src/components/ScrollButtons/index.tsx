import React from "react";

import { IconType } from "react-icons";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { TbCup } from "react-icons/tb";
import { GiChickenOven } from "react-icons/gi";

import { ButtonIconProduct } from "../Buttons/ButtonIconProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Box } from "@chakra-ui/react";

import { IProduct } from "@/interfaces";
import {
	Drinks,
	Hamburguers,
	Pizzas,
	Portions,
} from "@/products";
import { ActiveSectionContext, IActiveSection } from "@/contexts/activeSection";

interface IProductButton {
	name: string;
	icon: IconType;
	section: IProduct[];
}

const productButtons: IProductButton[] = [
	{
		name: "Pizzas",
		icon: FaPizzaSlice,
		section: Pizzas,
	},
	{
		name: "Hamburguers",
		icon: FaHamburger,
		section: Hamburguers,
	},
	{
		name: "Drinks",
		icon: TbCup,
		section: Drinks,
	},
	{
		name: "Porções",
		icon: GiChickenOven,
		section: Portions,
	},
];

export const ScrollButtons: React.FC = () => {

	const { activeSection, setActiveSection } = React.useContext(ActiveSectionContext) as IActiveSection;

	return (
		<Box overflow="hidden" w="100%">
			<Swiper
				slidesPerView={2}
				spaceBetween={20}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					320: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					375: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					425: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
				className="mySwiper"
				style={{
					paddingLeft: "20px",
					overflow: "hidden",
				}}
			>
				{productButtons.map(({ icon, name, section }) => (
					<SwiperSlide
						key={name}
						style={{
							maxWidth: "100px",
							height: "150px",
							display: "flex",
							alignItems: "center",
						}}>
						<ButtonIconProduct
							icon={icon}
							isActive={section === activeSection ? true : false}
							onClick={() => setActiveSection(section)}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

