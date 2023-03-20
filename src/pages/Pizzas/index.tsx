import React from "react";
import { NextPage } from "next";
import { AppBar, ProductCard, ContainerApp } from "@/components";
import { Pizzas as PizzaList } from "@/products";

const Pizzas: NextPage = () => (
	<>
		<AppBar route="Pizzas" />
		<ContainerApp>
			{PizzaList.map((item) => (
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

export default Pizzas;
