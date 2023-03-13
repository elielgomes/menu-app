import { Drinks } from "./Drinks";
import { Hamburguers } from "./Hamburguers";
import { Pizzas } from "./Pizzas";
import { Portions } from "./Portions";

export { Drinks } from "./Drinks";
export { Hamburguers } from "./Hamburguers";
export { Pizzas } from "./Pizzas";
export { Portions } from "./Portions";

export const AllProducts = [
	...Drinks,
	...Hamburguers,
	...Pizzas,
	...Portions,
];
