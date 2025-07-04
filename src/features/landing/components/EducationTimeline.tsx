// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import type { JSX } from "react";

type TimelineItem = {
    date: string;
    title: string;
    institution: string;
    description: string;
    highlights: string[];
    icon: string;
};

const education: TimelineItem[] = [
    {
        date: "2014 - 2017",
        title: "High School Diploma",
        institution: "Nevada State High School",
        description:
            "Dual-enrollment curriculum with 26 college credits earned from College of Southern Nevada.",
        highlights: ["Graduated with College Credits", "Focused on STEM", "Concurrent College Courses"],
        icon: "src/assets/Screenshot 2025-06-24 at 10.30.42 AM.png",
    },
    {
        date: "2017 - 2019",
        title: "Associate's Degree in Physical Education",
        institution: "Reedley College",
        description: "Emphasis on athletics, performance, and discipline.",
        highlights: [
            "MVP of the Big 8 Conference",
            "Torch of Excellence for GPA and Athleticism (2x)",
            "Coach Perkins Most Improved Player Award",
            "Student-Athlete Leader",
        ],
        icon: "src/assets/Screenshot 2025-06-24 at 10.27.37 AM.png",
    },
    {
        date: "2023 - 2025",
        title: "Bachelor's Degree in Computer Science",
        institution: "Regis University",
        description:
            "Focused on full-stack development, distributed systems, and modern architecture.",
        highlights: [
            "3.75 GPA",
            "Dean’s List Honoree",
            "Capstone: Coming Soon",
            "Co-founded a commercial solar project management platform that processed over $40M in proposals.",
        ],
        icon: "src/assets/Screenshot 2025-06-24 at 10.33.04 AM.png",
    },
    {
        date: "2025 - Present",
        title: "Master of Science in Data Science",
        institution: "Regis University",
        description:
            "Heavily focused on advanced machine learning and neural network research in applied AI.",
        highlights: ["Coming Soon"],
        icon: "src/assets/Screenshot 2025-06-24 at 10.33.04 AM.png",
    },
];

export default function EducationTimeline(): JSX.Element {
    return (
        <section className="relative py-[96px] ">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Education</h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Academic Journey
                    </p>
                </div>

                <VerticalTimeline lineColor="#22d3ee" layout="1-column-left">
                    {education.map((item, idx) => (
                        <VerticalTimelineElement
                            key={idx}
                            date={item.date}
                            icon={
                                <div className="flex items-center bg-none justify-center w-full h-full bg-white rounded-full p-0.25">
                                    <img
                                        src={item.icon}
                                        alt={item.institution}
                                        className="object-contain rounded-full"
                                    />
                                </div>
                            }
                            contentStyle={{ background: "transparent", boxShadow: "none", padding: "0" }}
                            contentArrowStyle={{ borderRight: "7px solid #f8fafc" }}
                        >
                            <div className="bg-slate-50 text-slate-800 border-l-4 border-cyan-300 rounded-xl p-6 shadow-md">
                                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                <p className="text-sm italic text-zinc-600">{item.institution}</p>
                                <p className="text-sm text-zinc-700 mt-2">{item.description}</p>
                                <ul className="list-disc list-inside mt-3 text-sm text-zinc-700 space-y-1">
                                    {item.highlights.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
}
