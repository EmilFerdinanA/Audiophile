import { Hero } from "@Shared/components/Hero.tsx";
import { CategoryCard } from "@Shared/components/CategoryCard.tsx";
import { Banner } from "./components/banner/Banner.tsx";
import { Bringing } from "@Shared/components/Bringing.tsx";

export const Home = () => {
  return (
    <>
      <Hero />
      <CategoryCard />
      <Banner />
      <Bringing />
    </>
  );
};
