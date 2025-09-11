import { headers } from 'next/headers'
import HomeMobile from "@/components/Home/Mobile";
import HomeDesktop from "@/components/Home/Desk";

const Home = async () => {
  const userAgent = (await headers()).get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(userAgent);

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}

export default Home;
