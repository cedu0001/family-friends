import Image from "next/image";
import { CiStar } from "react-icons/ci";

const BreedCard = ({ breedGroup, origin, image }) => {
	return (
		<div className=" bg-white rounded-2xl shadow mb-4 w-fit">
			<div className="relative">
				<CiStar size={24} color="white" className="bg-[rgba(254,254,254,0.25)] absolute m-2 rounded-full right-0" />
				<Image src={image} alt="lil bean" width={160} height={114} className="rounded-2xl object-cover" />
			</div>
			<div className="m-3">
				<h3 className="text-[#333333] text-base font-bold">{breedGroup}</h3>
				<p className="text-[#333333] opacity-40 text-xs w-24">{origin}</p>
			</div>
		</div>
	);
};

export default BreedCard;
