import { Icons } from "@/components";
 
export const CONTACT_PAGE = {
    title: 'Contact Us', 
    content: `Lorem ipsum dolor sit amet consectetur. Maecenas venenatis sit 
    netus ornare. Dolor `,  
    contact: [
        {
            id: 1,
            title: '27 Division St, 1100. Co 80237, USA',
            icon: <Icons.Map className="fill-white" />,
        },
        {
            id: 2,
            title: '+XXXXXXXXXXXXX',
            icon: <Icons.Phone className="fill-white" />,
        },
        {
            id: 3,
            title: 'mail@email.com',
            icon: <Icons.Map className="fill-white" />,
        }, 
    ],
    social: [
        {
            id: 1,
            icon: <Icons.Facebook className="fill-purple-500 w-5 h-5" />,
            route: '/'
        },
        {
            id: 2,
            icon: <Icons.Instagram className="fill-purple-500 w-5 h-5" />,
            route: '/'
        },
        {
            id: 3,
            icon: <Icons.Twitter className="fill-purple-500 w-4 h-4" />,
            route: '/'
        },
        {
            id: 4,
            icon: <Icons.Youtube className="fill-purple-500 w-5 h-5" />,
            route: '/'
        }
    ],
    thumb: '/contact/contact.png'
}