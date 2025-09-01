import Image from "next/image";
import Hero from "./components/hero/page";
import Logos from "./components/logos/page";
import Choose from "./components/choos/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Choose/>
    </>
  );
}
