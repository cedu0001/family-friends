import Image from "next/image";
import { LiaSearchSolid } from "react-icons/lia";
import { CgSearch } from "react-icons/cg";

export default function Home() {
	return (
		<section className=" grid grid-cols-[repeat(auto-fill.minmax(250px,1fr))] gap-4">
			<div className="flex justify-between my-6">
				<LiaSearchSolid size={45} color="white" className="bg-[#F2968F] p-2 rounded-full" />
				<input
					type="search"
					id="site-search"
					name="q"
					placeholder="search breeds"
					className="border-[1.5px] text-[#CACACD] rounded-full px-6 py-2"
				/>
			</div>
		</section>
	);
}
