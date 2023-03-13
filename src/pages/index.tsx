import React from "react";
import Head from "next/head";
import {
	Banner,
	Container,
	Navbar,
	ProductList,
} from "@/components";
import { NextPage } from "next";
import { ActiveSectionContext, IActiveSection } from "@/contexts/activeSection";

const Home: NextPage = () => {

	const { activeSection } = React.useContext(ActiveSectionContext) as IActiveSection;

	return (
		<>
			<Head>
				<title>Menu App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />

				{/* Google Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet" />

			</Head>
			<main>
				<Container>
					<Banner />
					<Navbar />
					<ProductList
						section={activeSection}
					/>
				</Container>
			</main>
		</>
	);
};

export default Home;
