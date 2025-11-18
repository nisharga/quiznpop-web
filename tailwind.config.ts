/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-require-imports */
 
import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "xl": "1280px",
            },
        },
        screens: {
            tiny: "350px",
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px",
        },
        extend: {
            backgroundImage: {
                bgtop: "url(/home/download/bgtop.png)",
                bgbottom: "url(/home/download/bgbottom.png)",
                bgleftbottom: "url(/home/download/bgleftbottom.png)",
                card_bg: "url(/auth_user/card_bg.png)",
                red_card: "url(/auth_user/red_card.png)",
                card_main_bg: "url(/auth_user/card_main_bg.png)",
                LineOne: "url(/blog/single/1.png)",
                LineTwo: "url(/blog/single/2.png)",
                LineThree: "url(/blog/single/3.png)",
                LineFour: "url(/blog/single/4.png)",
            },
            colors: {
                first: {
                    '100': '#757575',
                    '200': '#333333', // text-color
                    '300': '#464646', // icon-color
                    '400': '#C9C9C9', // border-right
                    '500': '#f7f6f9', // gray-bg
                    '600': '#AFFEB8', // bg-card
                    '700': '#E5AFFE', // bg-card
                    '800': '#FEE2AF', // bg-card
                    '900': '#AFBCFE', // bg-card
                },
                purple: {
                    '50': '#F9F6FE',
                    '100': '#F1EAFD',
                    '200': '#E6D8FC',
                    '300': '#D3B9F9',
                    '400': '#B88DF3',
                    '500': '#A670ED', // button-bg
                    '600': '#8540DD',
                    '700': '#712FC1',
                    '800': '#612B9E',
                    '900': '#50247F',
                    '950': '#340E5D'
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            fontFamily: { 
                inter: ["var(--font-inter-sans)"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;


export default config;