import { ShopButton } from "@Shared/components/Button.tsx";
import React from "react";

interface CategoryItemProps {
  src: string;
  alt: string;
  title: string;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  src,
  alt,
  title,
}) => {
  return (
    <div
      className={
        "bg-light-gray w-full h-[10.313rem] lg:h-[12.75rem] rounded-lg relative"
      }
    >
      <div
        className={
          "h-full w-[7.813rem] absolute -top-14 left-1/2 -translate-x-1/2"
        }
      >
        <img className={"w-full h-full"} src={src} alt={alt} />
      </div>
      <div
        className={"containers flex-col gap-1 absolute bottom-5 left-0 right-0"}
      >
        <p className={"font-bold"}>{title}</p>
        <ShopButton />
      </div>
    </div>
  );
};
