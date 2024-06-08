import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";

export default function Home() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className="text-white">
                <Navbar/>
                <div className="relative top-24">
                    <HomeContent/>
                </div>
            </div>
        </div>
    );
}
