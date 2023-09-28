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
      <div className="bg-cocoa_brown-300">{children}</div>
      <Footer />
    </>
  );
}
