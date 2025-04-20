import Speaker from "/assets/home/mobile/image-speaker-zx9.png";
import { SeeProductButton } from "@Shared/components/Button.tsx";

export const ZX9 = () => {
  return (
    <div
      className={
        "w-full h-[37.5rem] md:h-[45rem] lg:h-[35rem] px-6 lg:px-[5rem] xl:px-[10rem] rounded-lg text-white containers flex-col lg:flex-row lg:!items-end lg:!justify-between gap-9 background-zx9"
      }
    >
      <div className="w-[11rem] lg:w-[25.625rem] lg:h-full lg:pt-20">
        <img src={Speaker} alt="speaker" className="w-full h-full" />
      </div>

      <div className="containers flex-col text-center lg:text-left lg:!items-start lg:!justify-start lg:pt-28 lg:pl-20 gap-6 md:w-[21.813rem] lg:w-1/2 lg:h-full">
        <h1 className={"!text-4xl md:!text-[3.5rem]"}>
          ZX9 <br /> SPEAKER
        </h1>
        <p className="opacity-75 md:mb-4">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <SeeProductButton variant="tertiary" />
      </div>
    </div>
  );
};
