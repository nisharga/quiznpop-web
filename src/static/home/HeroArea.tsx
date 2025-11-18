import { Icons } from "@/components";

export const HERO = {
    title: 'Challange your mind and have fun !',
    subtitle: 'Innovate, explore, and push your limits. Create, discover, and grow every day.',
    achievementList: [
        {
            id: 1,
            icon: <Icons.User className='fill-first-300' />,
            count: 50,
            type: 'M',
            label: 'User'
        },
        {
            id: 2,
            icon: <Icons.Question className='fill-first-300' />,
            count: 2,
            type: 'K',
            label: 'Quiz'
        },
        {
            id: 3,
            icon: <Icons.Question className='fill-first-300' />,
            count: 1.5,
            type: 'M',
            label: 'Feedbacks'
        }
    ]
}

export const HERO_IMAGES = [
    { src: "/home/hero/boy.png", title: "Pop culture quiz" },
    { src: "/home/hero/girl.png", title: "Quiz Pop culture" },
    { src: "/home/hero/couple.png", title: "Culture quiz pop" }
];

export const SUPPORT = {
    title: 'Supported by',
    content: '12 Education Company',
    whiteIcon: <Icons.Ball className='fill-white' />,
    blueIcon: <Icons.Ball className='fill-purple-500' />
}