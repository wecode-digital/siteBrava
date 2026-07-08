import type { Metadata } from "next";
import TapumeNorden from "@/components/TapumeNorden";

export const metadata: Metadata = {
  title: "Brava agora é Norden",
  description: "Wecode, Brava e Centric se uniram e agora são Norden. Conheça o novo site: https://norden.ec",
};

const Home = () => {
  return <TapumeNorden />;
};

export default Home;
