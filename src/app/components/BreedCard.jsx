import Image from "next/image";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

const BreedCard = ({ id, breedGroup, origin, image }) => {
	return (
		<div className=" bg-white rounded-2xl shadow mb-4 w-fit pb-2">
			<div className="relative">
				<CiStar size={24} color="white" className="bg-[rgba(254,254,254,0.25)] absolute m-2 rounded-full right-0" />
				<Link href={`/detailview/${id}`}>
					<Image
						src={image}
						alt="lil bean"
						width={160}
						height={114}
						className="rounded-2xl object-cover aspect-square"
					/>
				</Link>
			</div>
			<div className="m-3">
				<h3 className="text-[#333333] text-base font-bold hyphens-auto w-24">{breedGroup}</h3>
				<p className="text-[#333333] opacity-40 text-xs hyphens-auto w-24">{origin}</p>
			</div>
		</div>
	);
};

export default BreedCard;
