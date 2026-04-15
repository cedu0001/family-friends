import { LiaSearchSolid } from "react-icons/lia";

const Searchbar = () => {
	return (
		<form className="flex justify-between my-6">
			<button type="submit">
				<LiaSearchSolid size={45} color="white" className="bg-[#F2968F] p-2 rounded-full" />
			</button>

			<input
				type="search"
				id="site-search"
				name="query"
				placeholder="search breeds"
				className="border-[1.5px] text-[#CACACD] rounded-full px-6 py-2"
			/>
		</form>
	);
};

export default Searchbar;
