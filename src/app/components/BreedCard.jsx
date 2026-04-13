import Image from "next/image";
import { CiStar } from "react-icons/ci";
const BreedCard = () => {
	return (
		<div className=" bg-white rounded-2xl shadow mb-4">
			<div className="relative">
				<CiStar size={24} color="black" className="bg-[rgba(254,254,254,0.25)] absolute m-2 rounded-full right-0" />
				<Image
					src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
					alt="lil bean"
					width={160}
					height={114}
					className="rounded-2xl"
				/>
			</div>
			<div className="m-3">
				<h3 className="text-[#333333] text-base font-bold">Breed Name</h3>
				<p className="text-[#333333] opacity-40 text-xs">Location</p>
			</div>
		</div>
	);
};

export default BreedCard;
