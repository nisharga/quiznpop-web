import { GRAPHQL_ENDPOINT } from "@/configs";
import { ApolloWrapper } from "@/shared/wrappers";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export function ApolloProvider({ children }: { children: ReactNode }) {
    return (
        <ApolloWrapper url={GRAPHQL_ENDPOINT}>
            <main className='scroll-smooth' suppressHydrationWarning>
                {children}
                <Toaster
                    position="top-center"
                    toastOptions={{
                        style: {
                            padding: "0.725rem",
                            color: "#08195E",
                        },
                        success: {
                            iconTheme: {
                                primary: "#08195E",
                                secondary: "#fff",
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: "#dc3545",
                                secondary: "#fff",
                            },
                        },
                    }}
                />
            </main>
        </ApolloWrapper>
    );
}
