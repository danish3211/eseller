import Image from "next/image";
import Hero from "./components/hero/page";
import Logos from "./components/logos/page";
import Choose from "./components/choos/page";
import Service from "./components/services/page";
import Process from "./components/process/page";
import Wise from "./components/wise/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Choose/>
      <Service/>
      <Process/>
      <Wise/>
    </>
  );
}
