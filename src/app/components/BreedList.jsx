import BreedCard from "./BreedCard";

const Breedlist = ({ searchParams }) => {
	return <FetchBreed searchParams={searchParams} />;
};

const FetchBreed = async ({ searchParams }) => {
	"use server";
	const { query } = await searchParams;
	const url = query ? `https://api.thedogapi.com/v1/breeds/search?q=${query}` : "https://api.thedogapi.com/v1/breeds";
	try {
		const response = await fetch(url, {
			headers: { "x-api-key": process.env.API_KEY },
		});
		console.log(response);
		const breeds = await response.json();

		return breeds.map((breed) => {
			return (
				<div key={breed.id} className="relative">
					<BreedCard id={breed.id} breedGroup={breed.name} origin={breed.origin} image={breed.image.url} />
				</div>
			);
		});
	} catch (error) {
		return <p>Whoops! An error has occurred</p>;
	}
};

export default Breedlist;
