import React from "react";
import Arrow from "@Assets/icon-arrow-right.svg";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const SeeProductButton: React.FC<ButtonProps> = ({
  variant = "primary",
}) => {
  const variantStyles = {
    primary: "bg-primary hover:bg-accent text-white",
    secondary:
      "bg-white hover:bg-black text-black hover:text-white outline-none border-2 border-black",
  };

  return (
    <button
      className={`h-12 w-40 subtitle cursor-pointer ${variantStyles[variant]}`}
    >
      SEE PRODUCT
    </button>
  );
};

export const ShopButton = () => {
  return (
    <button
      className={`subtitle flex items-center justify-center hover:text-primary gap-3 cursor-pointer`}
    >
      SHOP
      <span>
        <img src={Arrow} alt={"arrow"} />
      </span>
    </button>
  );
};
