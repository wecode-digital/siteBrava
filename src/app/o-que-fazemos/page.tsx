
import { headers } from 'next/headers'
import OqueFazemosMobile from './Mobile/index';
import OqueFazemosDesk from './Desk/index';

const OQueFazemos = async () => {
  const userAgent = (await headers()).get('user-agent') || '';
  const isMobile = /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile|ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(userAgent);
    return (
        <>
            {isMobile ?
                <OqueFazemosMobile /> :
                <OqueFazemosDesk />}
        </>

    )

}

export default OQueFazemos