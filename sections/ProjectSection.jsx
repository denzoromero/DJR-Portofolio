import { motion } from "framer-motion";


import TitleHeader from '../components/TitleHeader'

import Shopping from '../src/assets/Shopping.png'

import { FaGithub } from "react-icons/fa";
import { BsPinAngleFill } from 'react-icons/bs';


export default function ProjectSection({ id }) {

    const projects = [
    {
        imgSrc: ``,
        projectTitle: "ToolHub: Internal Catalog and Reservation System",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web MVC', 'HTML', 'CSS', 'Javascript', 'Razor Pages', 'Bootstrap', 'Authentication & Authorization'],
        descriptions: 
                ['E-commerce web app powered by ASP.NET Core API.', 
                'Includes authentication with Microsoft Authenticator (MFA) and secure API integration.'],
        websiteLink: "https://seatrium.com.br/home/ferramentaria"
    },
    {
        imgSrc: '',
        projectTitle: "ToolHub API: Catalog and Reservation Services",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web API', 'EF Core', 'SQL Server', 'C#', 'JWT Security'],
        descriptions: [
            'A RESTful ASP.NET Core Web API managing tool catalog inventory and rental reservation workflows.',
            'Secured with JWT (JSON Web Tokens) for stateless user authentication and authorization.',
            'Utilizes Entity Framework Core with SQL Server for reliable data persistence and relational querying.'
        ]
    },
    {
        imgSrc: '',
        projectTitle: "Toolhouse Inventory and Transaction Management System",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web MVC', 'HTML', 'CSS', 'Javascript', 'Razor Pages', 'Bootstrap'],
        descriptions: [
            'ASP.NET Core Web MVC platform managing toolhouse inventory lifecycles and rental transactions.',
            'Secured with Claims-based authentication/authorization and equipped with full audit logging for system operations.',
            'Designed with idempotent handling on key transaction workflows to protect against accidental duplicate requests.'
        ],
        githubLink: 'https://github.com/denzoromero/CleanFerramentaria.git'
    },
    {
        imgSrc: '',
        projectTitle: "Invoice Registration and Material Allocation System",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web MVC', 'HTML', 'CSS', 'Javascript', 'Razor Pages', 'Bootstrap'],
        descriptions: [
            'ASP.NET Core MVC application managing invoice tracking and material allocation for operational teams.',
            'Built custom PDF reporting logic utilizing optimized `window.print()` triggers to handle large, high-volume page renders without server bottlenecking.',
            'Styled custom print media queries (CSS `@media print`) to ensure pixel-perfect report layouts upon export.'
        ],
        githubLink: 'https://github.com/denzoromero/CleanArchitecture-CadNotas.git'
    },
    {
        imgSrc: '',
        projectTitle: "Engineering Material Management and Balancing System ",
        siteLink: "",
        repoLink: "",
        techStacks: ['ASP.NET Core Web MVC', 'HTML', 'CSS', 'Javascript', 'Razor Pages', 'Bootstrap'],
        descriptions: [
            'ASP.NET Core MVC system built to manage and balance engineering material allocations across projects.',
            'Designed to process complex cross-examination business logic to ensure high data accuracy and prevent inventory discrepancies.',
            'Features automated Excel spreadsheet parsing with template validation for fast data ingestion and batch processing.'
        ]
    }
    ];


    return (
        <section id={id} className="min-h-dvh pt-16 w-full overflow-auto flex flex-col p-4 bg-black">
            <TitleHeader title={id}/>
            <div className='flex justify-center'>
                <div className='grid grid-row md:grid-cols-3 gap-y-4 gap-x-6'>
                    {projects.map((item, index) => {
                        return (
                            <motion.div key={index} className='w-100 h-180 bg-gray-950 rounded-lg border border-white'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: index * 0.2,
                                }}>
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
                                        {item.websiteLink && (
                                            <a class="border rounded-lg p-1 flex justify-center items-center after:content-['_↗']" href={item.websiteLink}>Visit Site</a>
                                        )}
                                        {item.githubLink && (
                                            <a className='border rounded-lg p-1 flex justify-center items-center'
                                            href={item.githubLink} target="_blank"> 
                                                <FaGithub className='size-6' />
                                            </a>
                                        )}
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
                            </motion.div>
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