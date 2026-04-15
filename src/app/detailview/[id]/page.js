import BreedSingleView from "../../components/BreedSingleView";

import { Suspense } from "react";

const DetailView = () => {
	return (
		<Suspense fallback={<div>Loading your chosen dog 🐶...</div>}>
			<div>
				<BreedSingleView />
			</div>
		</Suspense>
	);
};

export default DetailView;
