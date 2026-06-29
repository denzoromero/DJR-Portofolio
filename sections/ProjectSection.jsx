
import TitleHeader from '../components/TitleHeader'


export default function ProjectSection({ id }) {
    return (
        <section id={id} className="min-h-dvh pt-16 w-full overflow-auto flex flex-col p-4 border border-white ">
            <TitleHeader title="Projects"/>
        </section>
    );
}