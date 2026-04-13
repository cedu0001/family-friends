import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="fixed bottom-0 left-0 w-full backdrop-blur-xl pb-6 p-2 bg-[rgba(255, 255, 255, 0.2)] rounded-t-xl">
			<div className="flex gap-18 py-2 justify-center">
				<FiHome size={24} color="#ACACAC" />
				<FaRegStar size={24} color="#ACACAC" />
				<IoChatbubbleOutline size={24} color="#ACACAC" />
				<FiUser size={24} color="#ACACAC" />
			</div>
		</footer>
	);
};

export default Footer;
