import type { Metadata, Viewport } from "next";
import "../style/globals.css";   
import { ApolloProvider } from "@/provider";
import { Footer, Header } from "@/components";
import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE, FONT_DEFAULT } 
    from "@/configs";




export const metadata: Metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION,
    icons: {
        icon: '/favicon.svg',
    },
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: APP_DEFAULT_TITLE
    },
    formatDetection: {
        telephone: false
    },
    openGraph: {
        type: 'website',
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE
        },
        description: APP_DESCRIPTION
    },
    twitter: {
        card: 'summary',
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE
        },
        description: APP_DESCRIPTION
    }
};


export const viewport: Viewport = {
    themeColor: '#f7f6f9'
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${FONT_DEFAULT.variable}`}>
                <ApolloProvider>
                    <Header />
                    {children}
                    <Footer />    
                </ApolloProvider>
            </body>
        </html>
    );
}