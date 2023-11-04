import Hero from "@/components/landing/hero";
import Why from "@/components/landing/why";
import How from "@/components/landing/how";
import Early from "@/components/landing/early";
import { defaultMetadata } from "@/data/site-metadata";

export async function generateMetadata() {
  return defaultMetadata;
}

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
