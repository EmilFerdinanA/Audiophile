import { SeeProductButton } from "@Shared/components/Button.tsx";

export const ZX7 = () => {
  return (
    <div
      className={
        "background-zx7 h-[20rem] w-full px-6 md:px-16 lg:px-24 rounded-lg containers flex-col gap-8 !items-start"
      }
    >
      <h4>ZX7 SPEAKER</h4>
      <SeeProductButton variant="secondary" />
    </div>
  );
};
