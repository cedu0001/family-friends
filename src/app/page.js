import Image from "next/image";
import Searchbar from "./components/Searchbar";
import BreedList from "./components/BreedList";

import { Suspense } from "react";

export default function Home() {
	return (
		<section className=" grid grid-cols-[repeat(auto-fill.minmax(250px,1fr))] gap-4">
			<Searchbar />
			<Suspense fallback={<div>Loading dogs 🐶...</div>}>
				<section className="flex flex-wrap gap-7 justify-center mb-3">
					<BreedList />
				</section>
			</Suspense>
		</section>
	);
}
