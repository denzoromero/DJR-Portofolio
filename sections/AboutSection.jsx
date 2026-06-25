

import TitleHeader from '../components/TitleHeader'
import LabelWithLogo from '../components/LabelWithLogo';
import Socials from '../components/Socials'

import { Mail, MapPin, GraduationCapIcon, University, Sparkles, Building2, Calendar } from 'lucide-react';

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
                                    icon: Mail,
                                    labelName: "Mail:",
                                    labelValue: "denzoromero@gmail.com"
                                }}
                            />
                            <LabelWithLogo
                                detail={{
                                    icon: MapPin,
                                    labelName: "Location:",
                                    labelValue: "Rio de Janeiro, Brazil"
                                }}
                            />
                            <LabelWithLogo
                                detail={{
                                    icon: GraduationCapIcon,
                                    labelName: "Education:",
                                    labelValue: "B.S in Information Communication Technology"
                                }}
                            />
                            <LabelWithLogo
                                detail={{
                                    icon: University,
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


                    {/* <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className='flex flex-row gap-4 items-center'>
                        <MapPin color='#cd1c18' size={30}/>
                        <div className='flex flex-col'>
                            <span className='text-sm text-gray-300'>
                                Location:
                            </span>
                            <span className='font-bold text-lg text-yellow-200'>
                                Rio de Janeiro, Brazil <span class="fi fi-br ml-2"></span>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <Mail color='#cd1c18' size={30}/>
                        <div className='flex flex-col'>
                            <span className='text-sm text-gray-300'>
                                Mail:
                            </span>
                            <span className='font-bold text-lg text-yellow-200'>
                                denzoromero@gmail.com
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <GraduationCapIcon color='#cd1c18' size={30}/>
                        <div className='flex flex-col'>
                            <span className='text-sm text-gray-300'>
                                Education:
                            </span>
                            <span className='flex flex-col font-bold text-lg text-yellow-200'>
                                Bachelor of Science in Information Communication Technology
                                <span className='text-xs font-light text-yellow-200'>University of San Carlos, Philippines</span>
                            </span>
                        </div>
                    </div> */}
                </div>
                <div className='flex flex-col px-6'>
                    <div className='flex justify-start pb-4'>
                        <p className='text-xl'>
                            Experience
                        </p>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex flex-row gap-4'>
                            <div className='border-r-4 w-1/5 p-4'>
                                <Sparkles color='#FFEF00' size={25}/>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <p className='text-2xl'>
                                    Full-Stack Developer
                                    <div className='flex text-sm items-center gap-2 py-2'>
                                        <Building2 className='inline' size={20} /> 
                                        Seatrium Estaleiro Brasfels
                                    </div>
                                    <div className='flex text-sm items-center gap-3'>
                                        <div className='flex text-sm items-center gap-2 py-2'>
                                            <Calendar className='inline' size={20} /> Present - 2023
                                        </div>
                                        <div className='flex text-sm items-center gap-2 py-2'>
                                            <MapPin className='inline' size={20} /> Rio de Janeiro, BR
                                        </div>
                                    </div>
                                </p>
                                <ul>
                                    <li>
                                        Sample
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>

                    <ul className="gap-y-4">
                        <li className="flex gap-10">
                            <div className="w-40 text-sky-400 font-semibold">
                                Present-2023
                            </div>

                            <div>
                                <p className="flex flex-col">
                                    <span>Full-stack Developer</span>
                                    <span className="text-sm text-gray-300">
                                        Seatrium Estaleiro Brasfels Ltda.
                                    </span>
                                    <div>
                                        Lorem ipsum dolor sit amet...
                                    </div>
                                </p>
                            </div>
                        </li>

                        <li className="flex gap-4">
                            <div className="w-20 text-sky-400 font-semibold">
                                2022-2020
                            </div>

                            <div>
                                Sample
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <div className='flex-1'>
                    <p className='flex justify-center text-3xl font-bold'>
                        Experience
                    </p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <p className='text-2xl font-bold'>
                                Frontend
                            </p>
                            <div className='flex flex-row gap-2'>
                                
                                <svg className='size-15' viewBox="0 0 128 128">
                                    <path fill="#E44D26" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"></path>
                                </svg>

                                
                                
                                <svg className='size-15' viewBox="0 0 128 128">
                                    <path fill="#1572B6" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26H19.67zm69.21 50.488L86.53 98.38l.009 1.875L64 106.55v.001l-.018.015-22.719-6.225L39.726 83h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495L77.702 77H51.795l-.222-2.355-.506-5.647L50.802 66h27.886l1.014-11H37.229l-.223-2.589-.506-6.03L36.235 43h55.597l-.267 3.334-2.685 30.154M89 14.374L81.851 6H89V1H73v4.363L81.39 13H73v5h16zm-19 0L63.193 6H70V1H55v4.363L62.733 13H55v5h15zM52 13h-8V6h8V1H38v17h14z"></path>
                                </svg>
          
          
          
          
                            </div>
                        </div>
                        <div>
                            Backend
                        </div>
                        <div>
                            Database
                        </div>
                        <div>
                            Tools
                        </div>
                    </div>
                
                </div> */}
            </div>
        </section>
        </>
    );
}