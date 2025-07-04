'use client'

import { type JSX } from 'react'
import { testimonials } from '../../../data/Testimonials.ts'

export default function Testimonial(): JSX.Element {
    return (
        <section className="relative text-white py-28 ">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">
                        Testimonials
                    </h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        What People Are Saying
                    </p>
                </div>

                {/* Masonry-style layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((testimonial, idx) => (
                        <figure
                            key={idx}
                            className="break-inside-avoid bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg shadow-cyan-500/20 transition-all duration-300"
                        >
                            <blockquote className="text-sm text-slate-300 italic leading-relaxed">
                                <p>{`“${testimonial.body}”`}</p>
                            </blockquote>

                            <figcaption className="mt-6 flex items-center gap-x-4">
                                <img
                                    src={testimonial.author.imageUrl}
                                    alt={testimonial.author.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400 shadow-md"
                                />
                                <div>
                                    <div className="font-semibold text-white">{testimonial.author.name}</div>
                                    <div className="text-xs font-medium text-cyan-300">
                                        {testimonial.author.position}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
