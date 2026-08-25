import { motion } from "framer-motion";
import { useState } from "react";

import TitleHeader from '../components/TitleHeader'
import LabelWithLogo from '../components/LabelWithLogo';
import Socials from '../components/Socials'

import LaptopIcon from '../src/assets/Laptop_Icon.png'
import BrainIcon from '../src/assets/Brain_Icon.png'
import CityIcon from '../src/assets/City_Icon.png'
import HackerIcon from '../src/assets/Hacker_Icon.png'


import "flag-icons/css/flag-icons.min.css";

export default function AboutSection({ id }) {

    const [titleFinished, setTitleFinished] = useState(false);

    return (
        <>
        <section id={id} className="min-h-dvh pt-16 w-full overflow-auto flex flex-col p-4 bg-black">
            <TitleHeader title={id} onComplete={() => setTitleFinished(true)} onReset={() => setTitleFinished(false)}/>
            <div className="flex flex-col py-2 gap-5 flex-1 items-stretch mx-5 md:mx-40">
                <div className='flex justify-start items-start flex-col md:flex-row gap-8 rounded-lg'>

                    <motion.div className="relative 
                                w-full
                                md:w-2/5 
                                p-1 
                                bg-cyan-500
                                rounded-lg overflow-hidden"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                // whileInView={ titleFinished ? { opacity: 1 } : { opacity: 0 } }
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                }}>
                        {/* Animated Border */}
                        {/* <div className="absolute inset-0
                                bg-[conic-gradient(from_0deg,#facc15,#fde047,#f59e0b,#fef08a,#facc15)]
                                animate-spin
                                [animation-duration:12s]"/> */}

                                
                        <div className="absolute inset-0 
                                        bg-[conic-gradient(from_0deg,#fff7ae,#fef08a,#fde047,#facc15,#fff7ae)]
                                        animate-spin [animation-duration:17s] "/>

                        <div className="absolute inset-0
                                        bg-[conic-gradient(from_0deg,#fff7ae,#fef08a,#fde047,#facc15,#fff7ae)] 
                                        animate-spin [animation-duration:17s]"/>


                        {/* Card Content */}
                        <div className="relative z-10 flex flex-col gap-y-6 rounded-lg p-6 bg-gray-950 shadow-lg shadow-yellow-400/75">
                            <div className="flex flex-col items-center border-b border-gray-700 pb-4">
                                <p className="text-2xl text-yellow-300 tracking-[0.3em] font-orbitron cyberpunk text-center">
                                    DABY JOHN ROMERO
                                </p>
                                <p className="mt-2 text-sm tracking-widest text-gray-400 uppercase">
                                    Full-Stack Developer
                                </p>
                            </div>

                            <div className="flex flex-col gap-y-5 px-2">
                                <LabelWithLogo
                                    detail={{
                                        icon: LaptopIcon,
                                        labelName: "Mail:",
                                        labelValue: "dabyjohnromero@gmail.com",
                                    }}
                                />

                                <LabelWithLogo
                                    detail={{
                                        icon: CityIcon,
                                        labelName: "Location:",
                                        labelValue: "Rio de Janeiro, Brazil",
                                    }}
                                />

                                <LabelWithLogo
                                    detail={{
                                        icon: BrainIcon,
                                        labelName: "Education:",
                                        labelValue: "B.S in Information Communication Technology",
                                    }}
                                />

                                <LabelWithLogo
                                    detail={{
                                        icon: HackerIcon,
                                        labelName: "School:",
                                        labelValue: "University of San Carlos, Philippines",
                                    }}
                                />

                                <div className="pt-4 border-t border-gray-700 flex justify-end">
                                    <Socials />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='w-full md:w-3/5'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        // whileInView={ titleFinished ? { opacity: 1 } : { opacity: 0 } }
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: titleFinished ? 0.8 : 0,
                        }}>
                        <p className='text-lg md:text-xl leading-relaxed space-y-2 text-slate-300'>
                            <span>
                                Full-Stack Software Engineer specializing in 
                                <span className="text-cyan-400 font-semibold">
                                     &nbsp; C# / ASP.NET Core 
                                </span> and 
                                <span className="text-yellow-300 font-semibold">
                                    &nbsp; React
                                </span>.
                            </span>
                            <span className='block mt-2 md:mt-3'>
                                {/* I focus on writing well-structured, maintainable code using Clean and Vertical Slice Architecture.  */}
                                I build scalable web applications with a 
                                <span className="text-cyan-400 font-semibold">
                                    &nbsp; strong focus on clean architecture,
                                </span>
                                <span className="text-yellow-300 font-semibold">
                                    &nbsp; maintainable code &nbsp;
                                </span>
                                and long term sustainability.
                            </span>
                            <span className='block mt-2 md:mt-3'>
                                {/* Experienced in end-to-end API design, SQL database integrations, and writing thorough unit, functional, and infrastructure tests to ensure long-term stability. */}
                                Experienced in
                                <span className="text-cyan-400 font-semibold">
                                    &nbsp;API design
                                </span>,
                                <span className="text-yellow-300 font-semibold">
                                    &nbsp; SQL database integrations &nbsp;
                                </span>
                             and comprehensive testing, including
                                <span className="text-cyan-400 font-semibold">
                                    &nbsp; unit, integration and functional testing &nbsp;
                                </span> 
                                to deliver reliable and high-quality solutions.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    );
}