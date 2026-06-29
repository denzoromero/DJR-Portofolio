

import TitleHeader from '../components/TitleHeader'
import LabelWithLogo from '../components/LabelWithLogo';
import Socials from '../components/Socials'
import Experience from '../components/Experience';

import { Mail, MapPin, GraduationCapIcon, University, Sparkles } from 'lucide-react';

import LaptopIcon from '../src/assets/Laptop_Icon.png'
import BrainIcon from '../src/assets/Brain_Icon.png'
import CityIcon from '../src/assets/City_Icon.png'
import HackerIcon from '../src/assets/Hacker_Icon.png'


import "flag-icons/css/flag-icons.min.css";

export default function AboutSection({ id }) {
    return (
        <>
        <section id={id} className="min-h-dvh pt-16 w-full overflow-auto flex flex-col p-4 border border-white ">
            <TitleHeader title="ABOUT"/>
            <div className="flex flex-col py-2 gap-5 flex-1 items-stretch mx-40">
                <div className='flex justify-start items-start flex-row gap-6 rounded-lg'>
                    <div className='w-2/5 flex flex-col gap-y-6 border border-amber-50 rounded-lg p-4'>
                        <div className='flex flex-col items-center py-2'>
                            <p className='text-2xl text-yellow-300 tracking-widest font-orbitron cyberpunk'>
                                DABY JOHN ROMERO
                            </p>
                            <p className='text-sm text-gray-300'>
                                Full-Stack Developer
                            </p>
                        </div>
                        <div className='flex flex-col py-2 px-6 gap-y-4'>      
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
                            <div className='mx-auto'>
                                <Socials />
                            </div>
                        </div>                 
                    </div>
                    <div className='w-3/5'>
                        <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col px-6'>
                    <div className='flex justify-start pb-4'>
                        <p data-glitch="Experience" className='text-xl glitch-load'>
                            Experience
                        </p>
                    </div>
                    <div className=''>
                        <Experience 
                            detail={{
                                    icon: Sparkles,
                                    jobDescription: "Full-Stack Developer",
                                    company: "Seatrium",
                                    date: "Present-2023",
                                    location: "Rio de Janeiro, BR",
                                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
                                }}
                        />
                        <Experience 
                            detail={{
                                    icon: Sparkles,
                                    jobDescription: "Full-Stack Developer",
                                    company: "Seatrium",
                                    date: "Present-2023",
                                    location: "Rio de Janeiro, BR",
                                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
                                }}
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}