import { ZX9 } from "./ZX9.tsx";
import { ZX7 } from "./ZX7.tsx";
import { YX1 } from "./YX1.tsx";

export const Banner = () => {
  return (
    <div className={"p-base gap-6 md:gap-8 lg:gap-12 containers flex-col"}>
      <ZX9 />
      <ZX7 />
      <YX1 />
    </div>
  );
};
