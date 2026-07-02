
import { motion } from "framer-motion";

import TitleHeader from '../components/TitleHeader'

import CyberEye from '../src/assets/cyber_eye_sm.png'


export default function SkillsSection ({id}){

    const skills = [
    {
        section: 'Frontend',
        stacks: [
            { title: 'HTML', percentage: 80 },
            { title: 'CSS', percentage: 80 },
            { title: 'React', percentage: 80 },
            { title: 'Bootstrap', percentage: 80 },
            { title: 'TailwindCSS', percentage: 80 }  
        ]
    },
    {
        section: 'Backend',
        stacks: [
            { title: 'ASP.Net Core', percentage: 80 },
            { title: 'Data Architecture', percentage: 80 },
            { title: 'Entity Framework Core', percentage: 75 },
            { title: 'LINQ', percentage: 75 },
            { title: 'REST APIs', percentage: 70 },
            { title: 'Authentication & Authorization', percentage: 70 },
            { title: 'Node.js', percentage: 50 },
        
        ]
    },
    {
        section: 'Languages',
        stacks: [
            { title: 'C#', percentage: 80 },
            { title: 'SQL', percentage: 70 },
            { title: 'JavaScript', percentage: 70 },
            { title: 'TypeScript', percentage: 70 },
            { title: 'Python', percentage: 70 },
        ]
    },
    {
        section: 'Database',
        stacks: [
            { title: 'SQL Server', percentage: 80 },
            { title: 'MySQL', percentage: 80 },
            { title: 'PostgreSQL', percentage: 70 },
            { title: 'MongoDB', percentage: 60 },
        ]
    },
    {
        section: 'Tools',
        stacks: [
            { title: 'Visual Studio', percentage: 75 },
            { title: 'VS Code', percentage: 75 },    
            { title: 'Git', percentage: 65 },
            { title: 'GitHub', percentage: 60 }, 
            { title: 'Figma', percentage: 50 }     
        ]
    }
    ];

    
    // const radius = 40
    // const circumference = 2 * Math.PI * radius
    // const offset = circumference - (circumference * 70) / 100

    return (
        <section id={id} className="min-h-dvh pt-16 w-full overflow-auto flex flex-col p-4">
            <TitleHeader title={id}/>
            {/* <div className='px-10 grid grid-cols-2 gap-10 justify-center items-start'> */}
            <div className='px-5 flex flex-wrap gap-10 justify-center items-start mt-6'>
                {skills.map((skill, x) => {
                    return (
                        <div key={x} className='w-64 h-120 flex flex-col gap-y-2 items-center rounded-lg py-2 border bg-black'>
                            <p data-glitch={skill.section} className='text-2xl glitch-load m-2 font-orbitron uppercase'>
                                {skill.section}
                            </p>
                            {skill.stacks.map((tech, y) => {
                                return (
                                    <div key={y} className="flex flex-col w-full px-4 py-1 gap-1">
                                        <div className='flex flex-row justify-between'>
                                            <div className='flex flex-row gap-2 items-center'>
                                                <img src={CyberEye} className='size-3' />
                                                <p className='text-xs tracking-tight font-orbitron '>
                                                    {tech.title}
                                                </p>
                                            </div>
                                            {/* <p className='text-xs font-orbitron text-yellow-300'>
                                                {tech.percentage}%
                                            </p> */}
                                        </div>
                                        <div className='w-full h-3 border-2 border-red-600 bg-black rounded-full'>
                                            <motion.div className="h-full bg-red-600 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${tech.percentage}%` }}
                                                viewport={{ once: false }}
                                                transition={{
                                                                duration: 1,
                                                                delay: y * 0.1,
                                                            }}
                                            />
                                        </div>
                                    </div> 
                                );
                            })}
                        </div>    
                    );
                })}
                
            
            </div>         
        </section>
    );
}