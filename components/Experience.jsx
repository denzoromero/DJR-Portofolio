

import { Building2 } from 'lucide-react';

import { PiStarFill } from "react-icons/pi";

export default function Experience() {
    // const currentYear = new Date().getFullYear();
    // const { icon: Icon, jobDescription, company, date, location, description } = detail;

    const experiences = [
    {
        jobDescription: "Full-Stack Developer",
        company: "Seatrium",
        yearTitle: "Present",
        date: "2023-Present",
        location: "Rio de Janeiro, BR",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
        isActive: true
    },
    {
        jobDescription: "Full-Stack Developer",
        company: "Freelance",
        yearTitle: "2022",
        date: "2020-2022",
        location: "Remote",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
        isActive: false
    },
    {
        jobDescription: "Junior Developer",
        company: "Gemango Software Services Inc.",
        yearTitle: "2020",
        date: "2019-2020",
        location: "Cebu City, Philippines",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
        isActive: false
    },
    {
        jobDescription: "Technical Support",
        company: "Gentle Child Care Learning Center",
        yearTitle: "2019",
        date: "2019",
        location: "Cebu City, Philippines",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
        isActive: false
    }
    ];

    return (
        <div className='flex flex-col'>
            {experiences.map((item, index) => {
                return (
                    <div key={index} className='flex flex-col gap-2'>
                        <div className='flex flex-row py-2'>
                            <div className={`w-1/4 flex justify-start relative border-l ${item.isActive ? "border-red-500" : "border-gray-400"}`}>
                                {item.isActive && (
                                        <div className='absolute -translate-x-1/2 left-0 top-5'>
                                        <PiStarFill className='animate-ping absolute' color='#FFEF00' size={20}/>
                                        <PiStarFill className='relative' color='#FFEF00' size={20}/>
                                    </div>
                                )}
                                <div className={`px-5 flex flex-col gap-y-2 py-4 ${item.isActive ? "text-red-500" : "text-gray-400 italic"}`}>
                                    <div className='text-2xl font-orbitron tracking-widest'>
                                        {item.yearTitle}
                                    </div>
                                    <div className='tracking-widest text-sm'>
                                        {item.date}
                                    </div>
                                    <div className='tracking-widest text-sm'>
                                        {item.location}
                                    </div>
                                </div>
                            </div>
                            <div className={`w-full flex flex-col gap-2 p-4 rounded-md border ${item.isActive ? "border-white text-amber-200" : "border-gray-400 text-gray-400 italic"}`}>
                                <p className='text-2xl'>
                                    <span className={`tracking-widest font-orbitron ${item.isActive && "cyberpunk"}`}>
                                        {item.jobDescription}
                                    </span>
                                    <div className='flex text-sm items-center gap-2 py-2'>
                                        <Building2 color={item.isActive ? `#cd1c18` : `#99A1AF`} className='inline' size={20} /> 
                                        {item.company}
                                    </div>
                                    <div className='flex text-sm items-center gap-3 text-yellow-300'>
                                        <div className='flex text-sm items-center gap-2 py-2'>
                                            {/* <Calendar color='#cd1c18' className='inline' size={20} /> {date} */}
                                        </div>
                                        <div className='flex text-sm items-center gap-2 py-2'>
                                            {/* <MapPin color='#cd1c18' className='inline' size={20} /> {location} */}
                                        </div>
                                    </div>
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p> 
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        // <div className='flex flex-col gap-2'>
        //     <div className='flex flex-row py-2'>
        //         <div className='w-1/4 flex justify-start relative border-l border-red-500'>
        //             <div className='absolute -translate-x-1/2 left-0 top-5'>
        //                 <PiStarFill className='animate-ping absolute' color='#FFEF00' size={20}/>
        //                 <PiStarFill className='relative' color='#FFEF00' size={20}/>
        //             </div>
        //             <div className='px-5 flex flex-col gap-y-2 py-4'>
        //                 <div className='text-2xl font-orbitron text-red-500 tracking-widest'>
        //                     Present
        //                 </div>
        //                 <div className='tracking-widest text-sm text-red-300'>
        //                     {/* {date} */}
        //                 </div>
        //                 <div className='tracking-widest text-sm text-red-300'>
        //                     {/* {location} */}
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='w-full flex flex-col gap-2 p-4 border border-white rounded-md'>
        //             <p className='text-2xl'>
        //                 <span className='text-yellow-300 tracking-widest font-orbitron cyberpunk'>
        //                     Full-Stack Developer
        //                 </span>
        //                 <div className='flex text-sm items-center gap-2 py-2 text-yellow-300'>
        //                     <Building2 color='#cd1c18' className='inline' size={20} /> 
        //                     Seatrium
        //                 </div>
        //                 <div className='flex text-sm items-center gap-3 text-yellow-300'>
        //                     <div className='flex text-sm items-center gap-2 py-2'>
        //                         {/* <Calendar color='#cd1c18' className='inline' size={20} /> {date} */}
        //                     </div>
        //                     <div className='flex text-sm items-center gap-2 py-2'>
        //                         {/* <MapPin color='#cd1c18' className='inline' size={20} /> {location} */}
        //                     </div>
        //                 </div>
        //             </p>
        //             <p>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //             </p> 
        //         </div>
        //     </div>
        // </div>



        // <div className='flex flex-row gap-4 py-4'>
        //     <div className='w-1/4 flex justify-start relative border-l border-red-500'>
        //         <div className='absolute -translate-x-1/2 left-0 top-5'>
        //             <PiStarFill className='animate-ping absolute' color='#FFEF00' size={20}/>
        //             <PiStarFill className='relative' color='#FFEF00' size={20}/>
        //         </div>
        //         <div className='px-5 flex flex-col gap-y-2 py-4'>
        //             <div className='text-2xl font-orbitron text-red-500 tracking-widest'>
        //                 Present
        //             </div>
        //             <div className='tracking-widest text-sm text-red-300'>
        //                 {date}
        //             </div>
        //             <div className='tracking-widest text-sm text-red-300'>
        //                 {location}
        //             </div>
        //         </div>
        //     </div>
        //     <div className='w-full flex flex-col gap-2 p-4 border border-white rounded-md'>
        //         <p className='text-2xl'>
        //             <span className='text-yellow-300 tracking-widest font-orbitron cyberpunk'>
        //                 {jobDescription}
        //             </span>
        //             <div className='flex text-sm items-center gap-2 py-2 text-yellow-300'>
        //                 <Building2 color='#cd1c18' className='inline' size={20} /> 
        //                 {company}
        //             </div>
        //             {/* <div className='flex text-sm items-center gap-3 text-yellow-300'>
        //                 <div className='flex text-sm items-center gap-2 py-2'>
        //                     <Calendar color='#cd1c18' className='inline' size={20} /> {date}
        //                 </div>
        //                 <div className='flex text-sm items-center gap-2 py-2'>
        //                     <MapPin color='#cd1c18' className='inline' size={20} /> {location}
        //                 </div>
        //             </div> */}
        //         </p>
        //         <p>
        //             {description}
        //         </p> 
        //     </div>
        // </div>
        
    );
}