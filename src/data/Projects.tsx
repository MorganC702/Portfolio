
export interface Project {
    title: string
    description: string
    tech: string[]
    image: string
    github: string
    link?: string
}

export interface Category {
    name: string
    projects: Project[]
}

export const categories: Category[] = [
    {
        name: 'Data Science',
        projects: [
            // {
            //     title: 'Housing Sales Price EDA and Prediction',
            //     description: 'Analyzed sentiment and topic modeling using spaCy and BERT.',
            //     tech: ['Python', 'spaCy', 'PyTorch'],
            //     image: 'src/assets/output.png',
            //     github: 'https://github.com/yourusername/nlp-analyzer',
            //     link: '/projects/nlp-analyzer',
            // },
            {
                title: 'Ultra Marathon Terrain Profiler',
                description: 'Predictive modeling on sales data using ARIMA and Prophet.',
                tech: ['Python', 'Jupyter', 'Pandas'],
                image: 'src/assets/leadville_hist.png',
                github: 'https://github.com/yourusername/time-series-forecasting',
                link: '/leadville',
            },
            // {
            //     title: "Historical Pattern Detection in dividend paying ETF's",
            //     description: 'Predictive modeling on sales data using ARIMA and Prophet.',
            //     tech: ['R', 'Prophet', 'Pandas'],
            //     image: 'src/assets/Morgan002.jpg',
            //     github: 'https://github.com/yourusername/time-series-forecasting',
            //     link: '/projects/time-series-forecasting',
            // },
        ],
    },
    {
        name: 'Software Engineering',
        projects: [
            {
                title: 'SUNIN Energy Inc.',
                description:
                    'As a Founding Engineer I built a full-stack project management platform that handled over $40M in proposal requests in the first 12 months of launching.',
                tech: ['React', 'Ruby on Rails', 'Stripe'],
                image: 'src/assets/Screenshot 2025-06-24 at 11.29.12 AM.png',
                github: '',
                link: '/suninenergy',
            },
            // {
            //     title: 'Portfolio Website',
            //     description: 'WebSocket-based group chat with emoji and file support.',
            //     tech: ['Next.js', 'Socket.io', 'MongoDB'],
            //     image: 'src/assets/Morgan002.jpg',
            //     github: 'https://github.com/yourusername/realtime-chat',
            //     link: '/projects/realtime-chat',
            // },
            // {
            //     title: 'TrailPrep.com ',
            //     description: 'WebSocket-based group chat with emoji and file support.',
            //     tech: ['Next.js', 'Socket.io', 'MongoDB'],
            //     image: 'src/assets/Morgan002.jpg',
            //     github: 'https://github.com/yourusername/realtime-chat',
            //     link: '/projects/realtime-chat',
            // },
        ],
    },
]