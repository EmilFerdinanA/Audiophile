export const Bringing = () => {
  return (
    <div className="p-base my-32 md:my-24 containers flex-col lg:flex-row-reverse lg:!justify-between gap-10 md:gap-16 lg:gap-8">
      <div
        className={
          "background-bringing h-[18.75rem] lg:h-[36.75rem] w-full rounded-lg lg:w-1/2"
        }
      ></div>
      <div
        className={
          "containers flex-col lg:!items-start gap-8 text-center lg:text-left lg:w-1/2"
        }
      >
        <h4 className={"md:!text-[2.5rem] lg:w-[27.813rem]"}>
          BRINGING YOU THE <span className={"text-primary"}>BEST</span> AUDIO
          GEAR
        </h4>
        <p className={"opacity-50 lg:w-[27.813rem]"}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};
