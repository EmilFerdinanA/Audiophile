import { SeeProductButton } from "@Shared/components/Button.tsx";

export const YX1 = () => {
  return (
    <div className={"w-full flex flex-col gap-6 md:flex-row md:gap-3 lg:gap-8"}>
      <div className={"w-full h-[20rem] background-yx1 rounded-lg"}></div>
      <div
        className={
          "w-full h-[20rem] containers flex-col gap-8 bg-light-gray rounded-lg !items-start p-6 md:p-10 lg:p-24"
        }
      >
        <h4>YX1 EARPHONES</h4>
        <SeeProductButton variant="secondary" />
      </div>
    </div>
  );
};
