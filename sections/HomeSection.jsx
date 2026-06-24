

// import LandscapePhoto from '../src/assets/landscape.png'
// import MoonPhoto from '../src/assets/moon.png'

// import StarBackground from '../components/StarCanvas';

import HomeBackground from "../components/HomeBackground";

import HeroText from "../components/GlitchEffect";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function HomeSection({ id }) {
    return (
        <>
        <section id={id} className="min-h-dvh w-full relative overflow-hidden">
            {/* <h1>Home Section</h1> */}

            <HomeBackground />

            <div className="absolute h-3/4 w-5/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-transparent
                grid grid-cols-[1fr_auto] gap-2">
                
                <div className="flex flex-col gap-6">
                    <h1 className="text-yellow-300 text-3xl tracking-widest font-orbitron cyberpunk glitch">
                        Hi, I'M DABY
                    </h1>
                    <HeroText />
                    <p className="text-white text-xl">
                        I am Full-Stack Developer, Open to job opportunities worldwide.
                    </p>
                    <div className="flex flex-row gap-4 items-center">        
                        <FaGithub className="size-8"/>
                        <FaLinkedin className="size-8"/>
                        <FaInstagram className="size-8"/>
                    </div>
                    <div>
                        Download Resume Button
                    </div>
                </div>
                <div className="bg-red-100">
                    grid 2
                </div>
            </div>

                {/* <StarBackground />

                <img src={MoonPhoto} 
                    className='size-90 absolute top-0 right-0
                     translate-x-[30%] translate-y-[-30%]'/>

                <img src={LandscapePhoto} 
                    className="absolute inset-0 w-full h-full object-cover
                     translate-y-[30%] translate-x-[-0%]"/> */}
        </section>
        </>
    );
}