import type { JSX } from "react";
import Testimonial from "../components/Testimonial";
import HeroSection from "../components/HeroSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Projects from "../components/Projects.tsx";
import EducationTimeline from "../components/EducationTimeline";

export default function Landing(): JSX.Element {
    return (
        <main className="relative bg-[#0f172a] text-white overflow-x-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Central Cyan Glow (Tailwind: cyan-400) */}
                <div className="absolute top-[30%] left-[-400%] w-[120rem] h-[120rem] -translate-x-1/2 -translate-y-1/2
      bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.2),_transparent_80%)] blur-[100px]"/>
                {/* color: cyan-400 */}

                {/* Left Blue Glow (Tailwind: blue-500) */}
                <div className="absolute top-[60%] left-[-10%] w-[100rem] h-[100rem]
      bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.3),_transparent_80%)] blur-[100px]"/>
                {/* color: blue-500 */}

                {/* Right Sky Glow (Tailwind: sky-400) */}
                <div className="absolute top-[10%] right-[-20%] w-[100rem] h-[100rem]
      bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.3),_transparent_80%)] blur-[100px]"/>
                {/* color: sky-400 */}

                {/* Bottom Center Sweep (Tailwind: cyan-500) */}
                <div className="absolute bottom-[10%] left-[30%] w-[80rem] h-[80rem]
      bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.3),_transparent_80%)] blur-[120px]"/>
                {/* color: cyan-500 */}
            </div>


            {/* Sections */}
            <HeroSection/>
            <Projects/>
            <ExperienceTimeline/>
            <EducationTimeline/>
            <Testimonial/>
        </main>

    );
}
