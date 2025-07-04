'use client'

import { type JSX } from 'react'

export default function About(): JSX.Element {
    const cardClasses =
        'inline-block min-w-[180px] h-48 bg-zinc-800 rounded-2xl shadow-md border border-zinc-700 overflow-hidden hover:shadow-lg transition-shadow duration-300'

    return (
        <main className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white space-y-32 pb-24">

            {/* Intro */}
            <section id="intro" className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                            <span className="text-cyan-400">Who</span> I Am
                        </h2>
                        <p className="text-lg text-slate-300 font-mono">
                            I'm a builder, a thinker, and a lifelong learner.
                        </p>
                        <p className="text-base text-gray-400">
                            With roots in both data science and software engineering, I thrive at the intersection of structure and creativity. Whether optimizing models or crafting user experiences, my goal is always to create something that matters.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="/resume.pdf"
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                View Resume
                            </a>
                            <a
                                href="/contact"
                                className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300"
                            >
                                Connect With Me
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative group">
                        <div className="overflow-hidden rounded-3xl border border-zinc-700 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 blur-3xl opacity-20 z-0" />
                            <img
                                src="src/assets/Morgan002.jpg"
                                alt="Morgan Cooper"
                                className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Beyond Work */}
            <section id="beyond" className="px-6">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h3 className="text-3xl font-bold text-cyan-400">Beyond the Code</h3>
                    <p className="text-lg text-slate-300">
                        At my core, I believe in intentionality and curiosity. I’m driven by a desire to understand how things work and how they can be made better — not just in tech, but in life.
                    </p>
                    <p className="text-base text-gray-400">
                        I value quiet confidence, creative resilience, and living with integrity. Whether I’m collaborating on a team or hiking a solo trail, I bring the same passion and presence to every experience.
                    </p>
                </div>
            </section>

            {/* Interests */}
            <section id="hobbies" className="px-6 space-y-32">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    <h3 className="text-3xl font-bold text-blue-400">Hobbies & Lifestyle</h3>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                        I'm energized by the intersection of motion, reflection, and play. These aren’t just hobbies — they’re ways I stay grounded and connected.
                    </p>
                </div>

                {/* Ultra Running */}
                <div className="max-w-7xl mx-auto">
                    <h4 className="text-2xl font-bold text-cyan-400 mb-2">Ultra Running</h4>
                    <p className="text-gray-400 mb-4">
                        Running 30+ miles through the mountains is a reminder that the mind gives up before the body. It’s freedom, discipline, and flow all at once.
                    </p>
                    <div className="overflow-x-auto whitespace-nowrap space-x-4 flex pb-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className={cardClasses}>
                                <img
                                    src={`https://source.unsplash.com/random/180x180?trailrunning,mountains&sig=${i}`}
                                    alt={`Trail ${i + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Golf */}
                <div className="max-w-7xl mx-auto">
                    <h4 className="text-2xl font-bold text-cyan-400 mb-2">Golf</h4>
                    <p className="text-gray-400 mb-4">
                        Precision, patience, and presence — golf is my way of meditating with motion. I love the quiet challenge and those one-in-a-million shots.
                    </p>
                    <div className="overflow-x-auto whitespace-nowrap space-x-4 flex pb-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className={cardClasses}>
                                <img
                                    src={`https://source.unsplash.com/random/180x180?golf&sig=${i}`}
                                    alt={`Golf ${i + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reading */}
                <div className="max-w-7xl mx-auto">
                    <h4 className="text-2xl font-bold text-cyan-400 mb-2">Reading</h4>
                    <p className="text-gray-400 mb-4">
                        I collect books like tools. Ideas, stories, and strategies live on my shelves. Here's a quick look.
                    </p>
                    <div className="overflow-x-auto whitespace-nowrap space-x-4 flex pb-4">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className={cardClasses + ' px-4 py-3 text-sm text-slate-300'}>
                                <img
                                    src={`https://source.unsplash.com/random/180x180?book&sig=${i}`}
                                    alt={`Book ${i + 1}`}
                                    className="w-full h-24 object-cover mb-2"
                                />
                                <p className="font-semibold">Book Title {i + 1}</p>
                                <p className="text-xs text-gray-400">Author Name</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
