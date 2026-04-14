import BreedCard from "./BreedCard";

const Breedlist = () => {
	return <FetchBreed />;
};

const FetchBreed = async () => {
	"use server";
	const response = await fetch("https://api.thedogapi.com/v1/breeds", {
		headers: { "x-api-key": process.env.API_KEY },
	});
	const breeds = await response.json();

	return breeds.map((breed) => {
		return <BreedCard key={breed.id} breedGroup={breed.breed_group} origin={breed.origin} image={breed.image.url} />;
	});
};

export default Breedlist;
