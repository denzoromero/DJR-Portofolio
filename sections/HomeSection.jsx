

import LandscapePhoto from '../src/assets/landscape.png'
import MoonPhoto from '../src/assets/moon.png'

import StarBackground from '../components/StarCanvas';



export default function HomeSection() {
    return (
        <>
            <section className="h-screen w-full  relative overflow-hidden">
                {/* <h1>Home Section</h1> */}

                <StarBackground />

                <img src={MoonPhoto} 
                    className='size-90 absolute top-0 right-0
                     translate-x-[30%] translate-y-[-30%]'/>

                <img src={LandscapePhoto} 
                    className="absolute inset-0 w-full h-full object-cover
                     translate-y-[30%] translate-x-[-0%]"/>
            </section>
        </>
    );
}