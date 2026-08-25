
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Socials () {
    return (
        <div className="flex flex-row gap-4 items-center">      
            <a href="https://www.linkedin.com/in/daby-john-romero" target="_blank">
                <FaLinkedin className="size-8"/>
            </a>  
          
            <a href="https://github.com/denzoromero" target="_blank">
                <FaGithub className="size-8"/>
            </a>
        </div>
    );
} 