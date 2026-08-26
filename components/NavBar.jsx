
import CyberpunkRadio from "./CyberpunkRadio";

import { useState } from "react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 w-full bg-gray-800 z-50">
            <div className="h-16 flex justify-between items-center px-4 md:px-12">
                <h1
                    className="text-yellow-300 text-3xl md:text-5xl tracking-widest font-sefa glitch"
                    data-text="DJR"
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

                {/* Desktop */}
                <div className="hidden md:block">
                    <CyberpunkRadio />
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-900 p-4">
                    <CyberpunkRadio />
                </div>
            )}
        </div>
    );
}