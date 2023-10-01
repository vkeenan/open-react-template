import { NavBar } from "@/components/ui/navbar";
import Header from "@/components/ui/header";
import { MemberFooter } from "@/components/ui/member-footer";
import { MemberNav } from "@/components/ui/member-nav";
import { Suspense } from "react";

export default function MemberRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <NavBar />
      <div className="bg-cocoa_brown-200">
        <div className="container flex flex-wrap mx-auto xl:max-w-7xl">
          <aside className="hidden w-1/4 h-screen p-4 sm:hidden md:block bg-cocoa_brown-200">
            <MemberNav />
          </aside>
          <main className="w-full p-4 md:w-3/4 bg-cocoa_brown-200">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </main>
        </div>
      </div>
      <MemberFooter />
    </>
  );
}
