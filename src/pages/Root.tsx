import { Header } from "@Shared/components/Header.tsx";
import { Footer } from "@Shared/components/Footer.tsx";
import { Outlet } from "react-router";
import { ScrollToTop } from "@Shared/components/ScrollToTop.tsx";

export const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
