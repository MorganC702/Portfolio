'use client'

import { type JSX } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../../data/Projects.tsx'

export default function Projects(): JSX.Element {
    return (
        <section className="relative overflow-hidden py-28">
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">Portfolio</h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Some Projects I’ve Completed
                    </p>
                </div>

                <div className="lg:flex lg:gap-10">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`mb-16 ${category.name === 'Data Science' ? 'lg:w-2/3' : 'lg:w-1/3'} w-full`}
                        >
                            <h3
                                className={`text-2xl font-bold ${
                                    category.name === 'Software Engineering'
                                        ? 'text-blue-400 border-blue-500'
                                        : 'text-cyan-400 border-cyan-600'
                                } border-b-2 pb-3 mb-6 text-center`}
                            >
                                {category.name}
                            </h3>

                            {category.projects.length === 0 ? (
                                <div className="text-center text-sm text-slate-400 italic">Coming soon...</div>
                            ) : (
                                <div
                                    className={`grid gap-3 items-stretch ${
                                        category.name === 'Data Science' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 lg:grid-cols-1'
                                    }`}
                                >
                                    {category.projects.map((project, i) => (
                                        <Link
                                            to={project.link || '/'}
                                            key={i}
                                            className="bg-white text-gray-900 rounded-2xl p-5 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-[1.01] min-h-[400px] flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden border border-gray-100 group">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black/70 text-white text-sm font-medium flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                                        Click to learn more →
                                                    </div>
                                                </div>

                                                <h4 className="text-lg font-semibold">{project.title}</h4>
                                                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{project.description}</p>
                                            </div>

                                            <div className="mt-4 flex flex-wrap gap-2 text-xs">
                                                {project.tech.map((tech, j) => (
                                                    <span
                                                        key={j}
                                                        className={`${
                                                            category.name === 'Software Engineering'
                                                                ? 'bg-blue-100 text-blue-800'
                                                                : 'bg-cyan-100 text-cyan-800'
                                                        } px-2 py-1 rounded-md font-mono shadow-sm`}
                                                    >
                            {tech}
                          </span>
                                                ))}

                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded-md font-mono text-xs hover:bg-gray-300 transition"
                                                    >
                                                        View The Code Here
                                                    </a>
                                                )}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
