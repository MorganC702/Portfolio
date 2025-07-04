import { useEffect, useRef, useState, type JSX } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type TimelineItem = {
    date: string
    title: string
    company: string
    logo?: string
    description: string
    tech: string[]
    bullets: string[]
}

const experience: TimelineItem[] = [
    {
        date: 'Dec 2023 - Present',
        title: 'Founding Software Engineer',
        company: 'SUNIN Energy Inc.',
        logo: 'src/assets/Screenshot 2025-06-24 at 3.00.52 PM.png',
        description: 'Driving end-to-end product development in the solar and energy tech space.',
        tech: ['React.js', 'Node.js', 'Ruby on Rails', 'SQL', 'JavaScript', 'HTML'],
        bullets: [
            'Led the design and implementation of scalable frontend applications.',
            'Architected backend services to manage proposal processing.',
            'Established tech leadership practices and drove team alignment.'
        ]
    },
    {
        date: 'Jan 2023 - Dec 2023',
        title: 'Mentee Software Engineer',
        company: 'Freelance Software Engineer',
        logo: 'src/assets/Screenshot 2025-06-24 at 3.03.37 PM.png',
        description: 'Provided contract development services for startups and growing teams.',
        tech: ['React.js', 'Node.js'],
        bullets: [
            'Built and shipped custom web applications tailored to client needs.',
            'Integrated APIs and third-party services for enhanced app functionality.'
        ]
    },
    {
        date: 'Jul 2022 - Jul 2023',
        title: 'Door to Door Sales Representative',
        company: 'Elevation',
        logo: 'src/assets/Screenshot 2025-06-24 at 3.05.45 PM.png',
        description: 'Generated leads and managed B2C solar product outreach.',
        tech: [],
        bullets: [
            'Achieved high-conversion sales metrics in a competitive market.',
            'Delivered persuasive product demonstrations and handled objections on the spot.'
        ]
    },
    {
        date: 'Apr 2022 - Jul 2022',
        title: 'Door to Door Sales Representative',
        company: '1Solar',
        logo: 'src/assets/Screenshot 2025-06-24 at 3.07.14 PM.png',
        description: 'Engaged with customers to promote residential solar solutions.',
        tech: [],
        bullets: [
            'Quickly ramped up sales proficiency and built rapport with clients.',
            'Contributed to outreach strategy and territory optimization.'
        ]
    },
    {
        date: 'Sep 2021 - Mar 2022',
        title: 'Business Development Representative',
        company: 'Podium',
        logo: 'src/assets/Screenshot 2025-06-24 at 3.08.32 PM.png',
        description: 'Supported strategic sales initiatives for a B2B software platform.',
        tech: ['Salesforce', 'Outreach'],
        bullets: [
            'Sourced leads and scheduled product demos through outbound efforts.',
            'Collaborated closely with AE teams to drive pipeline performance.'
        ]
    },
    {
        date: 'May 2019 - Sep 2021',
        title: 'Door to Door Sales Representative',
        company: 'Elevation',
        logo: 'src/assets/Screenshot 2025-06-24 at 3.05.45 PM.png',
        description: 'Consistently exceeded performance benchmarks in solar sales.',
        tech: [],
        bullets: [
            'Specialized in direct-to-consumer sales with a focus on clean energy.',
            'Trained and mentored new sales reps on effective communication tactics.'
        ]
    },
]


export default function ExperienceTimeline(): JSX.Element {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const CARD_WIDTH = 360 + 24 // card width + gap

    const updateScrollButtons = () => {
        const el = scrollRef.current
        if (!el) return

        setCanScrollLeft(el.scrollLeft > 0)
        setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 10)
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const el = scrollRef.current
            const scrollBy = direction === 'right' ? CARD_WIDTH : -CARD_WIDTH
            el.scrollBy({ left: scrollBy, behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return
        el.addEventListener('scroll', updateScrollButtons)
        updateScrollButtons()
        return () => el.removeEventListener('scroll', updateScrollButtons)
    }, [])

    return (
        <section className="relative py-28">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">
                        Professional Experience
                    </h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        The Work I’ve Done
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center mb-4 px-2">
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="rounded-full p-2 bg-cyan-600 hover:bg-cyan-600 text-white shadow transition"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )}
                    <div className="flex-1" />
                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="rounded-full p-2 bg-cyan-600 hover:bg-cyan-600 text-white shadow transition"
                        >
                            <ChevronRight size={20} />
                        </button>
                    )}
                </div>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="overflow-x-auto hide-scrollbar scroll-smooth"
                >
                    <div className="flex gap-6 w-max">
                        {experience.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white text-gray-900 w-[360px] max-w-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 min-h-[400px] flex flex-col justify-start"
                            >
                                <div className="mb-3">
                                    <p className="text-xs font-semibold text-cyan-600">{item.date}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        {item.logo && (
                                            <img
                                                src={item.logo}
                                                alt={item.company}
                                                className="w-8.5 h-8 object-fill rounded-full"
                                            />
                                        )}
                                        <p className="text-sm font-medium text-gray-700">{item.company}</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-extrabold text-gray-900 leading-snug mb-2">{item.title}</h3>

                                <div className="text-sm text-gray-700 mb-4">
                                    <p className="font-semibold text-gray-800 mb-1">Description:</p>
                                    <p>{item.description}</p>
                                </div>

                                <div className="mb-4">
                                    <p className="font-semibold text-sm text-gray-800 mb-1">Skills:</p>
                                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                                        {item.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-md shadow-sm"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="font-semibold text-sm text-gray-800 mb-1">Accomplishments:</p>
                                    <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside overflow-auto max-h-32 pr-1">
                                        {item.bullets.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
