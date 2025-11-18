import { Icons } from "@/components";

export const DOWNLOAD = {
    title: 'Download the App',
    imageOne: '/home/download/1.png',
    imageTwo: '/home/download/2.png',
    achievements: [
        {
            id: 1,
            title: 'App Download',
            quantity: 70,
            quantityType: 'M',
            icon: <Icons.Downlaod className="fill-purple-500" />
        },
        {
            id: 2,
            title: 'Active User',
            quantity: 50,
            quantityType: 'M',
            icon: <Icons.User className="fill-purple-500" />
        },
        {
            id: 3,
            title: 'Quiz',
            quantity: 2,
            quantityType: 'K',
            icon: <Icons.Question className="fill-purple-500" />
        },
        {
            id: 4,
            title: 'Positive Feedbacks',
            quantity: 1.5,
            quantityType: 'K',
            icon: <Icons.Star className="fill-purple-500" />
        }
    ]
}