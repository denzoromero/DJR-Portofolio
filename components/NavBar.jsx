
import CyberpunkRadio from "./CyberpunkRadio";

export default function NavBar() {
    return (
        <div className="fixed top-0 h-16 w-full bg-gray-800 flex justify-between items-center px-12 z-50">
            <h1 className="text-yellow-300 text-5xl tracking-widest font-cynatar glitch" data-text="DJR"
                style={{
                    textShadow: `
                    0 0 3px #00f0ff,
                    0 0 6px #00f0ff,
                    0 0 12px #00f0ff
                    `
                }}
>
                DJR
                 <span className="glitch-layer">DJR</span>
            </h1>
            <div>
                <CyberpunkRadio />
            </div>
        </div>
    );
}