import Logo from "/assets/logo.svg";
import Facebook from "/assets/icon-facebook.svg";
import Twitter from "/assets/icon-twitter.svg";
import Instagram from "/assets/icon-instagram.svg";

const MENUS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const Footer = () => {
  return (
    <div className="containers md:!items-start flex-col gap-12 md:gap-8 lg:gap-9 bg-secondary p-base text-white">
      <div className="h-1 w-[6.313rem] bg-primary" />

      <div
        className={
          "containers flex-col lg:flex-row gap-12 md:gap-8 lg:gap-9 !justify-between md:!items-start md:mt-6 lg:mt-10 w-full"
        }
      >
        <img src={Logo} alt="logo" />

        <ul className={"containers flex-col md:flex-row gap-4 subtitle"}>
          {MENUS.map((menu, index) => (
            <li key={index} className="hover:text-primary cursor-pointer">
              {menu}
            </li>
          ))}
        </ul>
      </div>

      <p
        className={
          "text-center md:text-justify opacity-50 md:mb-12 lg:mb-5 lg:w-1/2"
        }
      >
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <div
        className={
          "containers flex-col md:flex-row md:!justify-between gap-12 w-full mb-9 md:mb-11 lg:mb-12"
        }
      >
        <p className={"font-bold opacity-50"}>
          Copyright 2021. All Rights Reserved
        </p>

        <div className={"containers cursor-pointer gap-4"}>
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};
