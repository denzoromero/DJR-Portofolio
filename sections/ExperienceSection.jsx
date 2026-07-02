
import { useState } from "react";

import TitleHeader from '../components/TitleHeader'
import Experience from '../components/Experience'


export default function ExperienceSection({id}){

    const [titleFinished, setTitleFinished] = useState(false);

    return (
        <section id={id} className="min-h-dvh pt-16 w-full overflow-hidden flex flex-col p-4 bg-gray-950">
            <TitleHeader title={id} onComplete={() => setTitleFinished(true)} onReset={() => setTitleFinished(false)}/>
            <div className='px-50'>
                <Experience titleFinished={titleFinished} />
            </div>
            
        </section>
    );
}