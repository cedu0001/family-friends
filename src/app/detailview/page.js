import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

const DetailView = () => {
	return (
		<div>
			<div className="relative">
				<CiStar size={24} color="black" className="bg-[rgba(254,254,254,0.25)] absolute m-2 rounded-full right-0" />
				<IoIosArrowBack size={24} color="black" className="bg-[rgb(255,255,255)] absolute m-2 rounded-full" />
				<div className="absolute m-2 bottom-0 bg-[rgba(254,254,254,0.2)] flex p-2 rounded-2xl backdrop-blur-xl">
					<Image
						src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
						alt="lil bean"
						width={32}
						height={32}
						className="rounded-lg aspect-square"
					/>
					<p className="text-white leading-none text-xs ml-2">Breed name</p>
				</div>

				<Image
					src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
					alt="lil bean"
					width={339}
					height={360}
					className="rounded-2xl w-screen aspect-square object-cover"
				/>
			</div>
			<div className="my-3">
				<h3 className="text-[#333333] text-3xl font-bold">Breed Name</h3>
			</div>
			<ul className="flex gap-2 my-2 text-[#6B8B42]">
				<li className="bg-[#ACD7FF] p-2 px-3 rounded-3xl">Confident</li>
				<li className="bg-[#EDA8B3] p-2 px-3 rounded-3xl">Alert</li>
				<li className="bg-[#C5E59C] p-2 px-3 rounded-3xl">Playful</li>
				<li className="bg-[#F1E689] text-[#978C2F] p-2 px-3 rounded-3xl">Loyal</li>
			</ul>
			<dl className="text-[#333333] my-5">
				<dt className="text-xs opacity-50 font-medium">Breed description</dt>
				<dd className="text-base mb-5">Small, sturdy toy breed with a distinctive...</dd>

				<dt className="text-xs opacity-50 font-medium">Breed history</dt>
				<dd className="text-base mb-5">Small, sturdy toy breed with a distinctive...</dd>
			</dl>
		</div>
	);
};

export default DetailView;
