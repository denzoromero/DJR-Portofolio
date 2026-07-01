
import TitleHeader from '../components/TitleHeader'


export default function SkillsSection ({id}){

    
    const radius = 40
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (circumference * 70) / 100

    return (
        <section id={id} className="min-h-dvh pt-16 w-full overflow-auto flex flex-col p-4">
            <TitleHeader title={id}/>
            <div className='mx-auto px-30 grid grid-cols-2 gap-10 justify-center items-center'>
                <div className='w-fit flex flex-col gap-y-4 items-center border p-8'>
                    <p>Front-End</p>
                    {/* <div className="grid grid-cols-3 gap-x-4 gap-y-3"> */}
                    <div className="flex flex-wrap justify-center gap-4 px-10">
                        <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                            <div className="relative size-20 flex flex-col items-center justify-center">
                                <svg
                                    className="absolute inset-0 rotate-90 scale-x-[-1]"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#e5e7eb"
                                    strokeWidth="6"
                                    fill="none"
                                    />

                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                    strokeLinecap="round"
                                    />
                                </svg>

                                <img
                                    className="size-10"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                />
                            </div>
                            <p>
                                80%
                            </p>
                            <p>
                                HTML
                            </p>
                        </div>

                        <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                            <div className="relative size-20 flex flex-col items-center justify-center">
                                <svg
                                    className="absolute inset-0 rotate-90 scale-x-[-1]"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#e5e7eb"
                                    strokeWidth="6"
                                    fill="none"
                                    />

                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                    strokeLinecap="round"
                                    />
                                </svg>

                                <img
                                    className="size-10"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                />
                            </div>
                            <p>
                                80%
                            </p>
                            <p>
                                HTML
                            </p>
                        </div>

                        <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                            <div className="relative size-20 flex flex-col items-center justify-center">
                                <svg
                                    className="absolute inset-0 rotate-90 scale-x-[-1]"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#e5e7eb"
                                    strokeWidth="6"
                                    fill="none"
                                    />

                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                    strokeLinecap="round"
                                    />
                                </svg>

                                <img
                                    className="size-10"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                />
                            </div>
                            <p>
                                80%
                            </p>
                            <p>
                                HTML
                            </p>
                        </div>

                        <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                            <div className="relative size-20 flex flex-col items-center justify-center">
                                <svg
                                    className="absolute inset-0 rotate-90 scale-x-[-1]"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#e5e7eb"
                                    strokeWidth="6"
                                    fill="none"
                                    />

                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                    strokeLinecap="round"
                                    />
                                </svg>

                                <img
                                    className="size-10"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                />
                            </div>
                            <p>
                                80%
                            </p>
                            <p>
                                HTML
                            </p>
                        </div>

                        <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                            <div className="relative size-20 flex flex-col items-center justify-center">
                                <svg
                                    className="absolute inset-0 rotate-90 scale-x-[-1]"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#e5e7eb"
                                    strokeWidth="6"
                                    fill="none"
                                    />

                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                    strokeLinecap="round"
                                    />
                                </svg>

                                <img
                                    className="size-10"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                />
                            </div>
                            <p>
                                80%
                            </p>
                            <p>
                                HTML
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className='w-fit flex flex-col gap-y-4 items-center border p-8'>
                    <p>Front-End</p>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-3">
                        <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                            <div className="relative size-20 flex flex-col items-center justify-center">
                                <svg
                                    className="absolute inset-0 rotate-90 scale-x-[-1]"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#e5e7eb"
                                    strokeWidth="6"
                                    fill="none"
                                    />

                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                    strokeLinecap="round"
                                    />
                                </svg>

                                <img
                                    className="size-10"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                />
                            </div>
                            <p>
                                80%
                            </p>
                            <p>
                                HTML
                            </p>
                        </div>

                        <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                            <div className="relative size-20 flex flex-col items-center justify-center">
                                <svg
                                    className="absolute inset-0 rotate-90 scale-x-[-1]"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#e5e7eb"
                                    strokeWidth="6"
                                    fill="none"
                                    />

                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                    strokeLinecap="round"
                                    />
                                </svg>

                                <img
                                    className="size-10"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                />
                            </div>
                            <p>
                                80%
                            </p>
                            <p>
                                HTML
                            </p>
                        </div>

                        <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                            <div className="relative size-20 flex flex-col items-center justify-center">
                                <svg
                                    className="absolute inset-0 rotate-90 scale-x-[-1]"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#e5e7eb"
                                    strokeWidth="6"
                                    fill="none"
                                    />

                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                    strokeLinecap="round"
                                    />
                                </svg>

                                <img
                                    className="size-10"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                />
                            </div>
                            <p>
                                80%
                            </p>
                            <p>
                                HTML
                            </p>
                        </div>

                        <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                            <div className="relative size-20 flex flex-col items-center justify-center">
                                <svg
                                    className="absolute inset-0 rotate-90 scale-x-[-1]"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#e5e7eb"
                                    strokeWidth="6"
                                    fill="none"
                                    />

                                    <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="#ef4444"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * 90) / 100}
                                    strokeLinecap="round"
                                    />
                                </svg>

                                <img
                                    className="size-10"
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                                    alt="HTML5"
                                />
                            </div>
                            <p>
                                80%
                            </p>
                            <p>
                                HTML
                            </p>
                        </div>
                    </div>
                </div>
            </div>
     

            {/* <div className='border rounded-lg w-32 h-40 flex flex-col justify-center items-center'>
                <div className="relative size-20 flex flex-col items-center justify-center">
                    <svg
                        className="absolute inset-0 rotate-90 scale-x-[-1]"
                        viewBox="0 0 100 100"
                    >
                        <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                        />

                        <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#ef4444"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset={251.2 - (251.2 * 90) / 100}
                        strokeLinecap="round"
                        />
                    </svg>

                    <img
                        className="size-10"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
                        alt="HTML5"
                    />
                </div>
                <p>
                    80%
                </p>
                <p>
                    HTML
                </p>
            </div> */}
            

        </section>
    );
}