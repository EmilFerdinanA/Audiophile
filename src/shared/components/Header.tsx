import Logo from "@Assets/logo.svg";
import IconCart from "@Assets/icon-cart.svg";
import IconHamburger from "@Assets/icon-hamburger.svg";

const MENUS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const Header = () => {
  return (
    <div
      className={
        "flex justify-center h-24 px-6 md:px-10 lg:px-40 absolute top-0 w-full"
      }
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
        <img className="relative md:left-14" src={Logo} alt={"logo"} />
        <ul className={"hidden lg:flex gap-8 subtitle text-white"}>
          {MENUS.map((menu, index) => (
            <li key={index} className="hover:text-primary cursor-pointer">
              {menu}
            </li>
          ))}
        </ul>
        <img src={IconCart} alt={"cart"} />
      </div>
    </div>
  );
};
