import React from "react";
import { Flex, Divider } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";
import { IProduct } from "@/interfaces";
import { AllProducts } from "@/products";
import { ISearchInput, SearchInputContext } from "@/contexts/searchInput";

interface IProps {
	section: IProduct[];
}

export const ProductList: React.FC<IProps> = ({ section }) => {

	const { searchInput } = React.useContext(SearchInputContext) as ISearchInput;

	const filterProduct = () => (
		!searchInput.trim() || !searchInput
			? (
				section
			)
			: (
				AllProducts.filter((item) => (
					(item.name.normalize("NFD")
						.replace(/[\u0300-\u036f]/g, "")
						.replaceAll("-", " ")).toLowerCase()
						.includes((searchInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll("-", " ")).toLowerCase())
				))
			)
	);

	return (
		<Flex flexDirection="column" gap={5} pt={10}>
			{filterProduct().map((item) => (
				<>
					<ProductCard
						key={item.name}
						image={item.image}
						name={item.name}
						price={item.price}
					/>
					<Divider width="90%" margin="0 auto" />
				</>
			))}
		</Flex>
	);
};
