import TitleHeader from '../components/TitleHeader'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from 'lucide-react';


export default function ContactMe ({id}){


    return (
        <section id={id} className="h-screen pt-16 w-full overflow-auto flex flex-col bg-black">
                <TitleHeader title={id}/>
                <div className='flex flex-col gap-4 h-full justify-center items-center'>
                    <p className='text-3xl p-4'>
                        Open to new opportunities and collaborations.
                    </p>
                    <div className='flex flex-row gap-3'>
                        <button className='flex flex-row gap-2 items-end'>
                            <FaLinkedin className='size-8' />
                            LinkedIn
                        </button>
                        <button className='flex flex-row gap-2 items-end'>
                            <FaGithub className='size-8' />
                            GitHub
                        </button>
                        <button className='flex flex-row gap-2 items-end'>
                            <Mail className='size-8' />
                            Mail
                        </button>
                    </div>
                    <div>
                        <button>
                            Resume
                        </button>
                    </div>
                </div>
        </section>
    );
}