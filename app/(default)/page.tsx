export const metadata = {
  title: "Work Different With AI",
  description:
    "Our goal is empowering professionals across industries to work smarter with AI. Through our training content, workshops, and advisory services, we help teams implement AI responsibly to augment human potential. We believe AI should be developed ethically to benefit society.",
};

import Hero from "@/components/hero";
import Why from "@/components/why";
import How from "@/components/how";
import What from "@/components/what";
import Early from "@/components/early";
import Trust from "@/components/trust";
import Resources from "@/components/resources";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/*   <Why />
      <How />
      <What />
      <Early />
      <Trust />
      <Resources />
      <Zigzag />
      <Testimonials />*/}
      <Newsletter />
    </>
  );
}
