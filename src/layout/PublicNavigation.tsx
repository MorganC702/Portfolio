'use client'

import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    BookOpenIcon,
    CodeBracketIcon,
} from '@heroicons/react/24/outline'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { categories } from '../data/Projects.tsx'
import {engagement, type IconType, type LinkItem} from "../data/Engagement.tsx";


interface AppNavigationProps {
    inner_content: React.ReactNode
}


// Assign icon by category
const getCategoryIcon = (name: string): IconType => {
    const lower = name.toLowerCase()
    if (lower.includes('data')) return BookOpenIcon
    if (lower.includes('software') || lower.includes('engineer')) return CodeBracketIcon
    return BookOpenIcon
}

// Convert categories to nav format
const categoryLinks: { title: string; items: LinkItem[] }[] = categories.map((cat) => ({
    title: cat.name,
    items: cat.projects.map((proj) => ({
        name: proj.title,
        href: proj.link || '#',
        icon: getCategoryIcon(cat.name),
        description: proj.description,
    })),
}))

// Dropdown component
const SectionDropdown = ({
                             title,
                             items,
                             isMobile = false,
                             closeMenu,
                         }: {
    title: string
    items: LinkItem[]
    isMobile?: boolean
    closeMenu?: () => void
}) => {
    const location = useLocation()

    if (isMobile) {
        return (
            <div className="space-y-3 px-2">
                <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">{title}</p>
                {items.map((item) => {
                    const isActive = location.pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            onClick={closeMenu}
                            className={`flex items-start gap-3 px-2 py-2 rounded-lg transition ${
                                isActive ? 'text-cyan-400' : 'text-gray-300'
                            } hover:bg-zinc-800`}
                        >
                            <item.icon className="size-5 text-cyan-300 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium">{item.name}</p>
                                {item.description && (
                                    <p className="text-xs text-gray-400">{item.description}</p>
                                )}
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }

    return (
        <Popover>
            {({ open }) => (
                <>
                    <PopoverButton className="inline-flex font-serif items-center gap-x-1 px-3 text-lg font-medium text-white transition hover:text-cyan-300">
                        {title}
                        <ChevronDownIcon
                            className={`size-4 text-cyan-300 transform transition-transform duration-200 ${
                                open ? 'rotate-180' : ''
                            }`}
                        />
                    </PopoverButton>
                    <PopoverPanel className="absolute inset-x-0 top-full z-50 backdrop-blur-md bg-zinc-900/90 border-y border-cyan-800 shadow-2xl shadow-black/20">
                        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {items.length > 0 ? (
                                items.map((item) => {
                                    const isActive = location.pathname === item.href
                                    return (
                                        <Popover.Button
                                            as={Link}
                                            to={item.href}
                                            key={item.name}
                                            className={`flex gap-x-4 p-4 transition text-left w-full ${
                                                isActive ? 'text-cyan-400' : 'text-white'
                                            } hover:bg-zinc-800/50`}
                                        >
                                            <item.icon className="size-6 text-cyan-300 mt-1" />
                                            <div>
                                                <p className="text-base font-medium">{item.name}</p>
                                                {item.description && (
                                                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                                                )}
                                            </div>
                                        </Popover.Button>
                                    )
                                })
                            ) : (
                                <div className="text-center col-span-full py-8 text-gray-400 italic text-sm">
                                    Projects coming soon.
                                </div>
                            )}
                        </div>
                    </PopoverPanel>
                </>
            )}
        </Popover>

    )
}

// Full nav layout
const PublicNavigation: React.FC<AppNavigationProps> = ({ inner_content }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    return (
        <>
            <header className="bg-zinc-950 border-b border-cyan-900 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 py-4 justify-between">
                    <Link
                        to="/"
                        className="text-2xl text-white font-serif font-bold relative inline-block hover:text-cyan-400"
                    >
                        MRC
                    </Link>

                    <div className="hidden sm:flex flex-1 justify-center gap-x-6">
                        {categoryLinks.map(({ title, items }) => (
                            <SectionDropdown
                                key={title}
                                title={title}
                                items={items}
                                closeMenu={() => setMobileMenuOpen(false)}
                            />
                        ))}
                        <SectionDropdown
                            title="Engagement"
                            items={engagement}
                            closeMenu={() => setMobileMenuOpen(false)}
                        />
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="sm:hidden text-white"
                    >
                        {mobileMenuOpen ? (
                            <XMarkIcon className="size-6" />
                        ) : (
                            <Bars3Icon className="size-6" />
                        )}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="sm:hidden bg-zinc-900 border-t border-cyan-900 px-6 py-6 space-y-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
                        {categoryLinks.map(({ title, items }) => (
                            <SectionDropdown
                                key={title}
                                title={title}
                                items={items}
                                isMobile
                                closeMenu={() => setMobileMenuOpen(false)}
                            />
                        ))}
                        <SectionDropdown
                            title="Engagement"
                            items={engagement}
                            isMobile
                            closeMenu={() => setMobileMenuOpen(false)}
                        />
                    </div>
                )}
            </header>

            <main className="bg-zinc-950 min-h-screen text-white">
                <div>{inner_content}</div>
            </main>
        </>
    )
}

export default PublicNavigation
