import type { ExpItem } from "../../interfaces/ExpItem";

export const ExpData: ExpItem[] = [
    {
        company: "CSU Chancellor's Office",
        title: 'Full-Stack Developer',
        duration: 'June 2025 - May 2026',
        points: [
            'Delivered critical bug fixes and new features on schedule leveraging Laravel, Blade, jQuery, and MySQL.',
            'Managed database migrations and schema versionings, ensuring data integrity across production deployments.',
            'Accelerated page load times by 30% across key user-facing dashboards by implementing asset minification/concatenation and optimizing complex Laravel Eloquent queries.'
        ],
        specialProject: {
            title: 'Gamification Module',
            points: [
                'Architected full-stack gamification module, featuring interactive user quiz with the goal of improving user data literacy on the dashboard pages.',
                'Collaborated directly with stakeholders and design team to translate technical specifications to develop features on time.',
                'Designed database schemas to track user progress, completion rates, and user high scores, optimizing for fast retrieval and scalability.'
            ]
        }
    },
    {
        company: "Innovation Brew Works",
        title: "Crew Member",
        duration: "Oct 2022 - May 2024",
        points: [
            "'Hands-on' experience in live brewpub operation that includes cash-handling, customer service, food production, inventory management, sanitation, and special events coordination.",
            "Demonstrated ability to work effectively unsupervised and with a team in a fast-paced environment.",
            "Trained new hires according to company guidelines."
        ],
        specialProject: null,
    }
];