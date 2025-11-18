import { Icons } from "@/components";

export const FOOTER = {
    title: `Lorem ipsum dolor sit amet consectetur. Dolor cras semper porttitor sit fames 
    egestas sit. Turpis massa leo volutpat.`,
    social: [
        {
            id: 1,
            icon: <Icons.Facebook className="fill-white" />,
            route: '/'
        },
        {
            id: 2,
            icon: <Icons.Instagram className="fill-white" />,
            route: '/'
        },
        {
            id: 3,
            icon: <Icons.Twitter className="fill-white w-4 h-4" />,
            route: '/'
        },
        {
            id: 4,
            icon: <Icons.Youtube className="fill-white" />,
            route: '/'
        }
    ],
    company_pageLink : [
        {
            id: 1,
            label: "Home",
            route: '/'
        }, 
        {
            id: 1,
            label: "News",
            route: '/news'
        }, 
        {
            id: 3,
            label: "About Us",
            route: '/about'
        },
    ],
    usefulLink : [
        {
            id: 1,
            label: "Privacy policy",
            route: '/privacy-policy'
        },
        {
            id: 2,
            label: "Terms & conditions",
            route: '/terms-and-conditions'
        },
        {
            id: 3,
            label: "Contact us",
            route: '/contact'
        },
    ],
    copyright: "Copyright © 2024, All Right Reserved SPANDS SPS LTD."
}