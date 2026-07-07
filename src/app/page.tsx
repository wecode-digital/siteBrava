import type { Metadata } from "next";
import TapumeNorden from "@/components/TapumeNorden";

export const metadata: Metadata = {
  title: "Brava",
  description: "Wecode, Brava e Centric agora são Norden.",
};

const Home = () => {
  return <TapumeNorden />;
};

export default Home;
