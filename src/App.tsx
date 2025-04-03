import { Header } from "@Shared/components/Header.tsx";
import { Hero } from "@Shared/components/Hero.tsx";
import { Footer } from "@Shared/components/Footer.tsx";
import { Category } from "./pages/home/components/category/Category.tsx";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Footer />
    </>
  );
};
