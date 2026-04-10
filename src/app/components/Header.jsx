import { LuBell } from "react-icons/lu";
import { LuBellDot } from "react-icons/lu";

const Header = () => {
	return (
		<div className="flex justify-between mb-4">
			<h1 className="font-semibold text-lg">FamilyFriends</h1>
			<LuBellDot size={25} />
		</div>
	);
};

export default Header;
