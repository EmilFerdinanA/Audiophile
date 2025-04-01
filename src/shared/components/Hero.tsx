import { Button } from "./Button";

export const Hero = () => {
  return (
    <div
      className={
        "background-hero containers h-[45.563rem] bg-[length:100vw_45.563rem] px-6 md:px-10 lg:px-40 lg:!justify-between"
      }
    >
      <div className="containers lg:!items-start text-white flex-col gap-6 text-center lg:text-justify w-full md:w-[23.688rem]">
        <span className="overlines">NEW PRODUCT</span>
        <h1 className="!text-4xl md:!text-[3.5rem]">XX99 MARK II HEADPHONES</h1>
        <span className="opacity-75 mb-4">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </span>
        <Button />
      </div>
    </div>
  );
};
