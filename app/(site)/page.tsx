import Hero from "@/components/hero";
import Why from "@/components/why";
import How from "@/components/how";
import What from "@/components/what";
import Early from "@/components/early";
import Resources from "@/components/resources";
import Newsletter from "@/components/newsletter";
import Testimonials from "@/components/testimonials";

export const metadata = {
  title: "Work Different With AI",
  description:
    "Our goal is empowering professionals across industries to work smarter with AI. Through our training content, workshops, and advisory services, we help teams implement AI responsibly to augment human potential. We believe AI should be developed ethically to benefit society.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <How />
      <Early />
      {/* <Testimonials /> 
      <Newsletter />*/}
    </>
  );
}
