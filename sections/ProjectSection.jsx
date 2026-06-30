
import TitleHeader from '../components/TitleHeader'

import Shopping from '../src/assets/Shopping.png'

import { FaGithub } from "react-icons/fa";


export default function ProjectSection({ id }) {
    return (
        <section id={id} className="min-h-dvh pt-16 w-full overflow-auto flex flex-col p-4">
            <TitleHeader title="Projects"/>
            <div className='mx-40'>
                <div className='w-96 h-180 bg-black rounded-lg'>
                    <div className='flex flex-row gap-1 justify-end px-2 py-3 items-center'>
                        <span className='rounded-full bg-yellow-300 inline-block size-2'></span>
                        <span className='rounded-full bg-green-300 inline-block size-2'></span>
                        <span className='rounded-full bg-red-300 inline-block size-2'></span>
                    </div>
                    <div className='px-8 flex flex-col gap-6'>
                        <div className='flex justify-center items-center'>
                            <img className='w-full h-50' src={Shopping} />
                        </div>
                        <p className='mx-auto text-2xl'>
                            Title Here
                        </p>
                        <div className='flex items-center gap-3 justify-end'>
                            <a class="border rounded-lg p-2 after:content-['_↗']" href="...">Visit Site</a>
                            <button className='border rounded-lg p-2'> 
                                <FaGithub className='size-6' />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs">
                            <span className='border rounded-full p-2'>ASP.NET Core Web MVC</span>
                            <span className='border rounded-full p-2'>HTML</span>
                            <span className='border rounded-full p-2'>CSS</span>
                            <span className='border rounded-full p-2'>Javascript</span>
                            <span className='border rounded-full p-2'>Razor Pages</span>
                            <span className='border rounded-full p-2'>Bootstrap</span>
                        </div>
                        <ul class="list-disc list-outside">
                            <li>
                                E-commerce web app powered by ASP.NET Core API.
                            </li>
                             <li>
                                Includes authentication with Microsoft Authenticator (MFA) and secure API integration.
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
          
        </section>
    );
}