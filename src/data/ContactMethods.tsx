import { FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa'
import { MailIcon } from 'lucide-react'

export const contactMethods = [
    {
        title: 'Email',
        value: 'you@example.com',
        href: 'mailto:you@example.com',
        icon: <MailIcon className="size-6 text-cyan-400" />,
    },
    {
        title: 'LinkedIn',
        value: 'linkedin.com/in/your-profile',
        href: 'https://linkedin.com/in/your-profile',
        icon: <FaLinkedin className="size-6 text-blue-500" />,
    },
    {
        title: 'GitHub',
        value: 'github.com/your-username',
        href: 'https://github.com/your-username',
        icon: <FaGithub className="size-6 text-slate-300" />,
    },
    {
        title: 'Kaggle',
        value: 'kaggle.com/your-profile',
        href: 'https://kaggle.com/your-profile',
        icon: <FaKaggle className="size-6 text-cyan-300" />,
    },
]