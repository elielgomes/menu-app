import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { IProduct } from "@/interfaces";
import { Pizzas } from "@/products";

export interface IActiveSection {
	activeSection: IProduct[];
	setActiveSection: Dispatch<SetStateAction<IProduct[]>>;
}

export const ActiveSectionContext = createContext<IActiveSection | null>(null);

const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {

	const [activeSection, setActiveSection] = useState<IProduct[]>(Pizzas);

	return (
		<ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
			{children}
		</ActiveSectionContext.Provider>
	);
};

export default ActiveSectionProvider;
