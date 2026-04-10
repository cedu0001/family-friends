import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Footer = () => {
	return (
		<div className="flex gap-[4em] items-center justify-center bg-[rgba(255, 255, 255, 0.2)]">
			<FiHome size={24} color="#ACACAC" />
			<FaRegStar size={24} color="#ACACAC" />
			<IoChatbubbleOutline size={24} color="#ACACAC" />
			<FiUser size={24} color="#ACACAC" />
		</div>
	);
};

export default Footer;
