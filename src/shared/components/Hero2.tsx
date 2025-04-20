import { useLocation } from "react-router";

export const Hero = () => {
  const { pathname } = useLocation();
  const label = pathname.split("/").filter(Boolean)[1];

  return (
    <div
      className={
        "containers h-28 md:h-64 lg:h-60 px-6 md:px-10 lg:px-40 bg-black text-white"
      }
    >
      <h2 className={"!text-2xl md:!text-4xl"}>{label.toUpperCase()}</h2>
    </div>
  );
};
