import Header from "@/components/ui/header";
import { NavBar } from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { SignupFormWidget } from "@/components/signup-form-widget";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <NavBar />
      <div className="bg-cocoa_brown-200">
        <div className="container flex flex-wrap py-3 mx-auto xl:max-w-7xl">
          <div className="flex flex-col items-center w-full pl-3 pr-3 md:pr-7 md:w-3/4">
            {children}
          </div>
          <aside className="flex flex-col items-center w-full md:w-1/4">
            <div>
              <SignupFormWidget />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
