import { Icons } from "@/components";

export const FEATURES = {
    title: 'Our Features',
    content: 'Lorem ipsum dolor sit amet consectetur. Maecenas venenatis sit netus ornare. Dolor ',
    realTimeBonus: {
        title: 'Real time bonus',
        content: `Lorem ipsum dolor sit amet consectetur. Adipiscing quam 
        euismod et non. Consequat.`,
        image: '/home/features/money.png',
        bonusList: [
            {
                id: 1,
                icon: <Icons.Dollar />,
                name: 'Winning prize',
                price: 15,
                position: 'top'
            },
            {
                id: 2,
                icon: <Icons.Dollar />,
                name: 'Winning prize',
                price: 15,
                position: 'bottom'
            },
            {
                id: 3,
                icon: <Icons.Dollar />,
                name: 'Winning prize',
                price: 15,
                position: 'left'
            }
        ]
    },
    popMatch: {
        title: 'Pop & match',
        content: `Lorem ipsum dolor sit amet consectetur. Adipiscing quam euismod 
        et non. Consequat.`
    },
    withdraw: {
        process: [
            {
                id: 1,
                icon: <Icons.Home />,
            },
            {
                id: 2,
                icon: <Icons.Money />,
            },
            {
                id: 3,
                icon: <Icons.Home />,
            },
            {
                id: 4,
                icon: <Icons.Money />,
            }
        ],
        title: 'Withdraw your bonus !!!',
        content: `Lorem ipsum dolor sit amet consectetur. Adipiscing quam euismod et 
        non. Consequat.`,
        buttons: [
            {
                id: 1,
                label: 'Download for android',
                route: '/', 
            },
            {
                id: 2,
                label: 'Download for iOS',
                route: '/', 
            }
        ],
    }
}