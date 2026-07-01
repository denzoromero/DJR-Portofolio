
import TitleHeader from '../components/TitleHeader'

import Shopping from '../src/assets/Shopping.png'

import { FaGithub } from "react-icons/fa";

import { BsPinAngleFill } from 'react-icons/bs';


export default function ProjectSection({ id }) {

    const projects = [
    {
        imgSrc: '',
        projectTitle: "ToolHub: Internal Catalog and Reservation System",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web MVC', 'HTML', 'CSS', 'Javascript', 'Razor Pages', 'Bootstrap', 'Authentication & Authorization'],
        descriptions: ['E-commerce web app powered by ASP.NET Core API.', 'Includes authentication with Microsoft Authenticator (MFA) and secure API integration.']
    },
    {
        imgSrc: '',
        projectTitle: "ToolHub API: Catalog and Reservation Services",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web API', 'EntityFramework', 'SQL Server', 'C#', 'JWT Authentication', 'Authentication & Authorization'],
        descriptions: ['Server-rendered web application built with ASP.NET Core MVC.', 'Integrated with a RESTful API and includes secure user authentication.']
    },
    {
        imgSrc: '',
        projectTitle: "Toolhouse Inventory and Transaction Management System",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web MVC', 'HTML', 'CSS', 'Javascript', 'Razor Pages', 'Bootstrap'],
        descriptions: ['.', 'Includes authentication with Microsoft Authenticator (MFA) and secure API integration.']
    },
    {
        imgSrc: '',
        projectTitle: "Invoice Registration and Material Allocation System",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web MVC', 'HTML', 'CSS', 'Javascript', 'Razor Pages', 'Bootstrap'],
        descriptions: ['.', 'Includes authentication with Microsoft Authenticator (MFA) and secure API integration.']
    },
    {
        imgSrc: '',
        projectTitle: "Engineering Material Management and Balancing System ",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web MVC', 'HTML', 'CSS', 'Javascript', 'Razor Pages', 'Bootstrap'],
        descriptions: ['.', 'Includes authentication with Microsoft Authenticator (MFA) and secure API integration.']
    }
    ];


    return (
        <section id={id} className="min-h-dvh pt-16 w-full overflow-auto flex flex-col p-4">
            <TitleHeader title={id}/>
            <div className=' flex justify-center'>
                <div className='grid grid-cols-3 gap-y-4 gap-x-6'>
                    {projects.map((item, index) => {
                        return (
                            <div key={index} className='w-100 h-180 bg-black rounded-lg border border-white'>
                                <div className='flex flex-row gap-1 justify-end px-2 py-3 items-center'>
                                    <span className='rounded-full bg-yellow-300 inline-block size-2'></span>
                                    <span className='rounded-full bg-green-300 inline-block size-2'></span>
                                    <span className='rounded-full bg-red-300 inline-block size-2'></span>
                                </div>
                                <div className='px-8 flex flex-col gap-4'>
                                    <div className='flex justify-center items-center'>
                                        {item.imgSrc && (<img className='w-full h-50' src={item.imgSrc} />)}
                                    </div>
                                    <p className='mx-auto h-16 text-md font-orbitron tracking-widest cyberpunk text-yellow-300'>
                                        {item.projectTitle}
                                    </p>
                                    <div className='flex items-center gap-x-3 justify-end'>
                                        <a class="border rounded-lg p-1 flex justify-center items-center after:content-['_↗']" href="...">Visit Site</a>
                                        <button className='border rounded-lg p-1 flex justify-center items-center'> 
                                            <FaGithub className='size-6' />
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-3 text-xs h-32 content-start">
                                        {item.techStacks.map((tech, i) => {
                                            return (
                                                <span key={i} className='border border-yellow-400 bg-red-600/75 text-xs rounded-full p-2'>{tech}</span>
                                            );
                                        })}
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        {item.descriptions.map((description, x) => {
                                            return (
                                                <div key={x} className='flex flex-row gap-2 items-start'>
                                                    <BsPinAngleFill className='size-4 shrink-0 mt-1 text-red-500 stroke-white' />
                                                    <div className='leading-tight text-sm'>
                                                        {description}
                                                    </div>   
                                                </div>   
                                            );
                                        })}


                                        {/* <div className='flex flex-row gap-3 items-start'>
                                            <BsPinAngleFill className='size-5' />
                                            <div>
                                                Description
                                            </div>   
                                        </div> 
                                        <div className='flex flex-row'>
                                            <BsPinAngleFill className='size-5' />
                                            <div>
                                                Description
                                            </div>   
                                        </div>  */}
                                    </div>    
                                    {/* <ul class="list-disc list-outside">
                                        <li>
                                            E-commerce web app powered by ASP.NET Core API.
                                        </li>
                                        <li>
                                            Includes authentication with Microsoft Authenticator (MFA) and secure API integration.
                                        </li>
                                    </ul>  */}
                                </div>
                            </div>
                        );
                    })}


                    {/* <div className='w-120 h-180 bg-black rounded-lg'>
                        <div className='flex flex-row gap-1 justify-end px-2 py-3 items-center'>
                            <span className='rounded-full bg-yellow-300 inline-block size-2'></span>
                            <span className='rounded-full bg-green-300 inline-block size-2'></span>
                            <span className='rounded-full bg-red-300 inline-block size-2'></span>
                        </div>
                        <div className='px-8 flex flex-col gap-4'>
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
                    <div className='w-120 h-180 bg-black rounded-lg'>
                        <div className='flex flex-row gap-1 justify-end px-2 py-3 items-center'>
                            <span className='rounded-full bg-yellow-300 inline-block size-2'></span>
                            <span className='rounded-full bg-green-300 inline-block size-2'></span>
                            <span className='rounded-full bg-red-300 inline-block size-2'></span>
                        </div>
                        <div className='px-8 flex flex-col gap-4'>
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
                    <div className='w-120 h-180 bg-black rounded-lg'>
                        <div className='flex flex-row gap-1 justify-end px-2 py-3 items-center'>
                            <span className='rounded-full bg-yellow-300 inline-block size-2'></span>
                            <span className='rounded-full bg-green-300 inline-block size-2'></span>
                            <span className='rounded-full bg-red-300 inline-block size-2'></span>
                        </div>
                        <div className='px-8 flex flex-col gap-4'>
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
                    </div> */}
                </div>
         
            </div>
          
        </section>
    );
}