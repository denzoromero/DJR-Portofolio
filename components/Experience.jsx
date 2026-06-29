

import {  MapPin, Building2, Calendar } from 'lucide-react';

export default function Experience({detail}) {
    const { icon: Icon, jobDescription, company, date, location, description } = detail;

    return (
        <div className='flex flex-row gap-4'>
            <div className='w-24 py-4 flex justify-end'>
                <Icon color='#FFEF00' size={25}/>
            </div>
            <div className='w-full flex flex-col gap-2 p-4 border border-white rounded-md my-4'>
                <p className='text-2xl'>
                    <span className='text-yellow-300 tracking-widest font-orbitron cyberpunk'>
                        {jobDescription}
                    </span>
                    <div className='flex text-sm items-center gap-2 py-2 text-yellow-300'>
                        <Building2 color='#cd1c18' className='inline' size={20} /> 
                        {company}
                    </div>
                    <div className='flex text-sm items-center gap-3 text-yellow-300'>
                        <div className='flex text-sm items-center gap-2 py-2'>
                            <Calendar color='#cd1c18' className='inline' size={20} /> {date}
                        </div>
                        <div className='flex text-sm items-center gap-2 py-2'>
                            <MapPin color='#cd1c18' className='inline' size={20} /> {location}
                        </div>
                    </div>
                </p>
                <p>
                    {description}
                </p> 
            </div>
        </div>
    );
}