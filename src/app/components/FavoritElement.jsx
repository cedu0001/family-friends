"use client";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import useFavorites from "../store/favorite";

const Favorite = ({ id, breed }) => {
	const { favorites, setFavorite, removeFavorite } = useFavorites();
	if (favorites.some((favorite) => favorite.id === id)) {
		return (
			<FaStar
				size={25}
				className="cursor-pointer absolute top-3 right-3 bg-[#fefefe3f] rounded-full text-white"
				onClick={() => {
					removeFavorite(id);
				}}
			/>
		);
	} else {
		return (
			<FaRegStar
				size={25}
				className="cursor-pointer absolute top-3 right-3 bg-[#fefefe3f] rounded-full text-white"
				onClick={() => {
					setFavorite(id, breed);
				}}
			/>
		);
	}
};

export default Favorite;
