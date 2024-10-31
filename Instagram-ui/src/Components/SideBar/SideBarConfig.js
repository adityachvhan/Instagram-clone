import { AiFillCompass, AiFillHeart, AiFillHome, AiFillMessage, AiFillPlusCircle, AiOutlineCompass, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { RiVideoLine, RiVideoFill } from "react-icons/ri"; // Import for Reels icons
import { CgProfile } from "react-icons/cg"; // Import for Profile icon
import { FaCircleUser } from "react-icons/fa6";

export const mainMenu = [
  {
    title: "Home",
    icon: <AiOutlineHome />,
    activeIcon: <AiFillHome />
  },
  {
    title: "Search",
    icon: <AiOutlineSearch />,
    activeIcon: <AiOutlineSearch />
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass />,
    activeIcon: <AiFillCompass />
  },
  {
    title: "Reels",
    icon: <RiVideoLine />,
    activeIcon: <RiVideoFill />
  },
  {
    title: "Message",
    icon: <AiOutlineMessage />,
    activeIcon: <AiFillMessage />
  },
  {
    title: "Notification",
    icon: <AiOutlineHeart />,
    activeIcon: <AiFillHeart />
  },
  {
    title: "Create",
    icon: <AiOutlinePlusCircle />,
    activeIcon: <AiFillPlusCircle />
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    activeIcon: <FaCircleUser />
  }
];
