import Image from "next/image";
import Searchbar from "./components/Searchbar";
import BreedCard from "./components/BreedCard";
import BreedSingleView from "./components/BreedSingleView";

export default function Home() {
	return (
		<section className=" grid grid-cols-[repeat(auto-fill.minmax(250px,1fr))] gap-4">
			<Searchbar />

			<section className="flex flex-wrap gap-7 justify-center mb-3">
				<BreedCard />
				<BreedCard />
			</section>
			<BreedSingleView />
		</section>
	);
}
