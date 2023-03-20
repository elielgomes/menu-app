import { Bebidas } from "./Bebidas";
import { Lanches } from "./Lanches";
import { Pizzas } from "./Pizzas";
import { Porcoes } from "./Porcoes";

export { Bebidas } from "./Bebidas";
export { Lanches } from "./Lanches";
export { Pizzas } from "./Pizzas";
export { Porcoes } from "./Porcoes";

export const AllProducts = [
	...Bebidas,
	...Lanches,
	...Pizzas,
	...Porcoes,
];
