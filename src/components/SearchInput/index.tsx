import React from "react";
import { Input } from "@chakra-ui/react";
import { SearchInputContext, ISearchInput } from "@/contexts/searchInput";

export const SearchInput: React.FC = () => {

	const { searchInput, setSearchInput } = React.useContext(SearchInputContext) as ISearchInput;

	return (
		<Input
			onChange={(e) => !e.target.value.trim() || !e.target.value
				? setSearchInput("")
				: setSearchInput(e.target.value)}
			value={searchInput}
			width="90%"
			height="60px"
			borderRadius={15}
			outline="none"
			border="2px solid"
			borderColor="gray.200"
			fontWeight="bold"
			color="gray.300"
			boxShadow="0px 5px 10px #00000021"
			fontSize={20}
			placeholder="Buscar..."
			_placeholder={{
				color: "gray.300",
			}}
			_focusVisible={{
				outline: "none",
			}}
			_focus={{
				borderColor: "gray.300",
			}}
		/>
	);
};
