import Hero from "@/components/hero";
import Why from "@/components/why";
import How from "@/components/how";
import Early from "@/components/early";
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
