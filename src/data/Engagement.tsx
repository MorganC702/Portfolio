import React from "react";

import {
    InformationCircleIcon,
    BriefcaseIcon,
    UserGroupIcon,
    DocumentTextIcon,
    AcademicCapIcon,
} from '@heroicons/react/24/outline'

export type IconType = React.FC<React.SVGProps<SVGSVGElement>>


export interface LinkItem {
    name: string
    href: string
    icon: IconType
    description?: string
}

export const engagement: LinkItem[] = [
    {
        name: 'About Me',
        href: '/about',
        icon: InformationCircleIcon,
        description: 'Get to know my background, interests, and values.',
    },
    {
        name: 'Resume',
        href: '/resume',
        icon: BriefcaseIcon,
        description: 'Download my resume for a full overview of my experience.',
    },
    {
        name: 'Contact',
        href: '/contact',
        icon: UserGroupIcon,
        description: 'Let’s connect — email, LinkedIn, GitHub, and more.',
    },
    {
        name: 'Letters of Recommendation',
        href: '/letters-of-recommendation',
        icon: DocumentTextIcon,
        description: 'Endorsements from professionals I’ve worked with.',
    },
    {
        name: 'Transcripts',
        href: '/transcripts',
        icon: AcademicCapIcon,
        description: 'Academic transcripts and coursework details.',
    },
    {
        name: 'Academic Articles',
        href: '/academic-work',
        icon: DocumentTextIcon,
        description: 'Research papers, whitepapers, and peer-reviewed work.'
    }
]
