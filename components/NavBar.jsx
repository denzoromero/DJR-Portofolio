
import CyberpunkRadio from "./CyberpunkRadio";

export default function NavBar() {
    return (
        <div className="sticky top-0 h-16 bg-gray-800 flex justify-between items-center px-12 z-50">
            <div className="font-cynatar text-6xl  tracking-wides">
                DJR
            </div>
            <div>
                <CyberpunkRadio />
            </div>
        </div>
    );
}