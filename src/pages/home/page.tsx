import { Header } from "@Shared/components/Header.tsx";
import { Hero } from "@Shared/components/Hero.tsx";
import { Category } from "./components/category/Category.tsx";
import { Banner } from "./components/banner/Banner.tsx";
import { Bringing } from "@Shared/components/Bringing.tsx";
import { Footer } from "@Shared/components/Footer.tsx";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Banner />
      <Bringing />
      <Footer />
    </>
  );
};
