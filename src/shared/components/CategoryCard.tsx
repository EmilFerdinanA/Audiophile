import { CategoryItem } from "@Shared/components/CategoryItem.tsx";

const CATEGORY = [
  { src: "/image-headphones.png", alt: "headphones", title: "HEADPHONES" },
  { src: "/image-speakers.png", alt: "speakers", title: "SPEAKERS" },
  { src: "/image-earphones.png", alt: "earphones", title: "EARPHONES" },
];

export const CategoryCard = () => {
  return (
    <div
      className={
        "containers gap-20 md:gap-5 lg:gap-10 mt-24 mb-28 md:mt-36 md:mb-24 lg:mt-52 lg:mb-40 p-base flex-col md:flex-row"
      }
    >
      {CATEGORY.map((item, index) => (
        <CategoryItem key={index} {...item} />
      ))}
    </div>
  );
};
