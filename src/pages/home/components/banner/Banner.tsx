import { ZX9 } from "./ZX9.tsx";
import { ZX7 } from "./ZX7.tsx";

export const Banner = () => {
  return (
    <div className={"p-base gap-8 containers flex-col"}>
      <ZX9 />
      <ZX7 />
    </div>
  );
};
