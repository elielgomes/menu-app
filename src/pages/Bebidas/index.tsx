import React from "react";
import { NextPage } from "next";
import { AppBar, ContainerApp, ProductCard } from "@/components";
import { Bebidas as BebidaList } from "@/products";

const Bebidas: NextPage = () => (
	<>
		<AppBar route="Bebidas" />
		<ContainerApp>
			{BebidaList.map((item) => (
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

export default Bebidas;
