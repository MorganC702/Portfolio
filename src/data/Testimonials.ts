interface Testimonial {
    body: string
    author: {
        name: string
        position: string
        imageUrl: string
    }
}

export const testimonials: Testimonial[] = [
    {
        body:
            "I’ve met very few people in my journey that have the drive, discipline, and transparency to not only " +
            "facilitate in the achievement of my goals, but to also be achieving their own, with the utmost integrity; " +
            "it's impressive to watch and I'm honored to be able to sit ringside.",
        author: {
            name: 'M. Kyle Adams',
            position: 'President & CEO – Legacy Companies Inc.',
            imageUrl: 'src/assets/IMG_6685.jpg',
        },
    },
    {
        body:
            "There are many people with goals, but few with the grit and\n" +
            "determination to follow through, and even fewer have the intelligence and discipline to make things\n" +
            "happen. Morgan’s got the mindset of a Navy Seal and won’t stop until the task is done.\n" +
            "To sum up Morgan’s character I would say he’s intelligent, disciplined, and relentless. If he agrees to\n" +
            "build anything for you, he’ll get it done.",
        author: {
            name: 'Dillon Cortez',
            position: 'CEO – Pepur',
            imageUrl: 'src/assets/Screenshot 2025-06-23 at 8.35.59 PM.png',
        },
    },
    {
        body:
            "I was lucky enough to work with Morgan and I can honestly say I've never seen anyone so determined and " +
            "focused on constantly improving. Anyone would be lucky to have him on their team.",
        author: {
            name: 'Robb Woodward',
            position: 'Enterprise BDR',
            imageUrl: 'src/assets/Screenshot 2025-06-24 at 3.20.04 PM.png',
        },
    },
    {
        body:
            "From the moment I met Morgan I was impressed by his outstanding personality and strong work ethic. He is a " +
            "true go-getter who doesnt stop until the job is done. I truly believe Morgan can accomplish anything he sets " +
            "his mind to- and he dos so in a humble and grounded way. All in all, he's not only intelligent but also takes the time to listen and understand- just a genuinely great guy.",
        author: {
            name: 'Jay Lee',
            position: 'CFO - SUNIN Energy & Former CEO - Amstar.io',
            imageUrl: 'src/assets/jayHeadshot.jpg',
        },
    },
]
