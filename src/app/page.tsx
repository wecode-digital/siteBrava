import type { Metadata } from "next";
import TapumeNorden from "@/components/TapumeNorden";

export const metadata: Metadata = {
  title: "Agora somos Norden",
  description: "Wecode, Brava e Centric agora são Norden.",
};

const Home = () => {
  return <TapumeNorden />;
};

export default Home;
