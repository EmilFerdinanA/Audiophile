import Logo from "/assets/logo.svg";
import IconCart from "/assets/icon-cart.svg";
import IconHamburger from "/assets/icon-hamburger.svg";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const MENUS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const Header = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${pathname === "/" ? (isScrolled ? "bg-black fixed" : "absolute") : "sticky bg-black"} flex justify-center h-24 px-6 md:px-10 lg:px-40  top-0 w-full z-50`}
    >
      <div
        className={
          "flex items-center justify-between w-full border-b-1 border-white"
        }
      >
        <img
          className="md:absolute lg:hidden"
          src={IconHamburger}
          alt={"hamburger"}
        />
        <img
          className="relative md:left-14 lg:left-0 cursor-pointer"
          src={Logo}
          alt={"logo"}
          onClick={() => navigate("/")}
        />
        <ul className={"hidden lg:flex gap-8 subtitle text-white"}>
          {MENUS.map((menu, index) => (
            <li key={index} className="hover:text-primary cursor-pointer">
              <Link
                to={menu === "HOME" ? "/" : `/category/${menu.toLowerCase()}`}
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
        <img src={IconCart} alt={"cart"} />
      </div>
    </div>
  );
};
