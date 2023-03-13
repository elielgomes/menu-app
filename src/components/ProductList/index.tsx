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

	const [visibleItems, setVisibleItems] = React.useState(15);
	const visibleProducts = [];

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			const handleScroll = () => {
				if (window.scrollY > 0) {
					setVisibleItems(Math.trunc(window.scrollY / 100));
				}
			};
			window.addEventListener("scroll", handleScroll);
		}
	}, []);

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

	for (let i = 0; i < visibleItems; i++) {
		if (visibleItems <= filterProduct().length - 1) {
			const product = filterProduct();
			visibleProducts.push(product[visibleItems]);
		}
	}

	return (
		<Flex flexDirection="column" gap={5} pt={10} minH="200vh">
			{/* {filterProduct().map((item) => (
				<>
					<ProductCard
						key={item.name}
						image={item.image}
						name={item.name}
						price={item.price}
					/>
					<Divider width="90%" margin="0 auto" />
				</>
			))} */}
			{visibleProducts.map((item) => (
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
