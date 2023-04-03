import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineMenu, HiOutlineUserGroup, HiOutlineInformationCircle } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { NavLinkProps } from "../interfaces/components";
import { LogoFull as logo } from "../assets";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "About", to: "/about", icon: HiOutlineInformationCircle }, 
];

const NavLinks = ({ handleClick }: NavLinkProps) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-lg font-medium text-gray-400 hover:text-red-200"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2"/>
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-black">
        <img src={logo} alt="logo" className="w-full h-14 object-contain"/>
        <NavLinks/>
      </div>

      {/* MOBILE DEVICES SIDEBAR */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)}/>
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)}/>
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#8b3d3d] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? "left-0" : "-left-full"}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain"/>
        <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>
    </>
  );
};

export default Sidebar;