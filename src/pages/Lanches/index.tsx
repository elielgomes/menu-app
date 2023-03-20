import React from "react";
import { NextPage } from "next";
import { AppBar, ContainerApp, ProductCard } from "@/components";
import { Lanches as LancheList } from "@/products";

const Lanches: NextPage = () => (
	<>
		<AppBar route="Lanches" />
		<ContainerApp>
			{LancheList.map((item) => (
				<>
					<ProductCard
						key={item.name}
						image={item.image}
						name={item.name}
						price={item.price}
					/>
				</>
			))}
		</ContainerApp>
	</>
);

export default Lanches;
