import TitleHeader from '../components/TitleHeader'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from 'lucide-react';


export default function ContactMe ({id}){


    return (
        <section id={id} className="h-screen pt-16 w-full overflow-auto flex flex-col bg-black">
                <TitleHeader title={id}/>
                <div className='flex flex-col gap-4 h-full justify-center items-center'>
                    <p className='text-3xl p-4 text-center'>
                        Open to new opportunities and collaborations.
                    </p>
                    <div className='flex flex-row gap-3'>
                        <a className='flex flex-row gap-2 items-end' href="https://www.linkedin.com/in/daby-john-romero" target="_blank">
                            <FaLinkedin className='size-8' />
                            LinkedIn
                        </a>
                        <a className='flex flex-row gap-2 items-end' href="https://github.com/denzoromero" target="_blank">
                            <FaGithub className='size-8' />
                            GitHub
                        </a>
                        <a className='flex flex-row gap-2 items-end' href="mailto:dabyjohnromero@gmail.com?subject=Inquiry%20from%20Portfolio"> 
                            <Mail className='size-8' />
                            Mail
                        </a>
                    </div>
                 <a 
                      href="./Daby_Romero_Resume.pdf"
                        download="Daby_Romero_Resume.pdf" 
                        // target="_blank"
                        class="cursor-pointer uppercase text-black font-mono bg-yellow-300 font-bold py-2 px-4 rounded border-2 border-blue-400 shadow-[0.25rem_0.25rem_#00f0ff] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#00f0ff]">
                            Resume
                        </a>
                </div>
        </section>
    );
}