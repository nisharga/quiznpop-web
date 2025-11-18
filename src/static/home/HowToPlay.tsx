import { Icons } from "@/components";

export const HOW_TO_PLAY = {
    title: 'How to Play',
    content: 'Lorem ipsum dolor sit amet consectetur. Maecenas venenatis sit netus ornare. Dolor ',
    image: '/home/howtoplay/phone.png',
    processList : [
        {
            id: 1,
            title: 'Download quizNpop',
            content: 'Lorem ipsum dolor sit amet consectetur. Ac lobortis at consequat',
            icon: <Icons.Downlaod className="fill-purple-500 w-4 sm:w-7" /> 
        },
        {
            id: 2,
            title: 'Register an account',
            content: 'Lorem ipsum dolor sit amet consectetur. Ac lobortis at consequat',
            icon: <Icons.User className="fill-purple-500 w-4 sm:w-7" />
        },
        {
            id: 3,
            title: 'Play different category',
            content: 'Lorem ipsum dolor sit amet consectetur. Ac lobortis at consequat',
            icon: <Icons.Question className="fill-purple-500 w-4 sm:w-7" />
        },
        {
            id: 4,
            title: 'Win with bonus',
            content: 'Lorem ipsum dolor sit amet consectetur. Ac lobortis at consequat',
            icon: <Icons.Cup className="fill-purple-500 w-4 sm:w-7" />
        }
    ]
}