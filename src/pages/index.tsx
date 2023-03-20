import React from "react";
import Head from "next/head";
import { NextPage } from "next";

import {
	ContainerApp,
	MenuCard,
} from "@/components";

import { Box } from "@chakra-ui/react";

const Home: NextPage = () => (
	<>
		<Head>
			<title>Menu App</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<main>
			<Box
				margin="0 auto"
				maxW="425px"
				height="100%"
				bgImage="linear-gradient(to right, #803120 30%, #f5f5f5 30%)"
			>
				<ContainerApp isHome>
					<MenuCard title="Pizzas" image="icons/pizzas.jpg" route="/Pizzas" />
					<MenuCard title="Lanches" image="icons/lanches.jpg" route="/Lanches" />
					<MenuCard title="Porções" image="icons/porcoes.jpg" route="/Porcoes" />
					<MenuCard title="Bebidas" image="icons/bebidas.jpg" route="/Bebidas" />
				</ContainerApp>
			</Box>
		</main>
	</>
);


export default Home;
