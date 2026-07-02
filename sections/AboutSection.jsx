import { motion } from "framer-motion";

import TitleHeader from '../components/TitleHeader'
import LabelWithLogo from '../components/LabelWithLogo';
import Socials from '../components/Socials'

import LaptopIcon from '../src/assets/Laptop_Icon.png'
import BrainIcon from '../src/assets/Brain_Icon.png'
import CityIcon from '../src/assets/City_Icon.png'
import HackerIcon from '../src/assets/Hacker_Icon.png'


import "flag-icons/css/flag-icons.min.css";

export default function AboutSection({ id }) {
    return (
        <>
        <section id={id} className="min-h-dvh pt-16 w-full overflow-auto flex flex-col p-4 bg-black">
            <TitleHeader title={id}/>
            <div className="flex flex-col py-2 gap-5 flex-1 items-stretch mx-40">
                <div className='flex justify-start items-start flex-row gap-8 rounded-lg'>

                    <motion.div className='relative w-2/5 flex flex-col gap-y-6 border-2 border-yellow-400/80
                                        shadow-lg shadow-yellow-400/75
                                        rounded-lg p-6 bg-gray-950'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{                         
                            duration: 0.8,
                            ease: "easeOut",
                        }}>
                        
                        <div className='flex flex-col items-center border-b border-gray-700 pb-4'>
                            <p className='text-2xl text-yellow-300 tracking-[0.3em] font-orbitron cyberpunk text-center'>
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
                                    labelValue: "denzoromero@gmail.com"
                                }}
                            />
                            <LabelWithLogo
                                detail={{
                                    icon: CityIcon,
                                    labelName: "Location:",
                                    labelValue: "Rio de Janeiro, Brazil"
                                }}
                            />
                            <LabelWithLogo
                                detail={{
                                    icon: BrainIcon,
                                    labelName: "Education:",
                                    labelValue: "B.S in Information Communication Technology"
                                }}
                            />
                            <LabelWithLogo
                                detail={{
                                    icon: HackerIcon,
                                    labelName: "School:",
                                    labelValue: "University of San Carlos, Philippines"
                                }}
                            />               
                            <div className="pt-4 border-t border-gray-700 flex justify-end">
                                <Socials />
                            </div>
                        </div>                 
                    </motion.div>
                    <div className='w-3/5'>
                        <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}