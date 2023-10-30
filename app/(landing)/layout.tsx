import "@/app/css/style.css";
import Header from "@/components/ui/header";
import { NavBar } from "@/components/ui/navbar";

import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <NavBar />
      <div className="flex flex-col items-center w-full px-3 mx-auto bg-azure_radiance-300 md:w-3/4">
        {children}
      </div>
      <Footer />
    </>
  );
}
