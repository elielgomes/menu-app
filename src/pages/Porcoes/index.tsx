import React from "react";
import { NextPage } from "next";
import { AppBar, ContainerApp, ProductCard } from "@/components";
import { Porcoes as PorcaoList } from "@/products";

const Porcoes: NextPage = () => (
	<>
		<AppBar route="Porções" />
		<ContainerApp>
			{PorcaoList.map((item) => (
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

export default Porcoes;
