'use client'
import {
    ApolloClient,
    ApolloProvider,
    NormalizedCacheObject
} from "@apollo/client"
import { useLogger } from "../logger"
import { createClient } from "./client"
import { useEffect, useState } from "react"
export function ApolloWrapper(
    { url, children }: { url: string, children: React.ReactNode }
) {
    const logger = useLogger()
    const [
        client, setClient
    ] = useState<ApolloClient<NormalizedCacheObject> | null>(null)
    useEffect(() => {
        const parsedUrl = new URL(url)
        setClient(createClient(parsedUrl, logger))
    }, [url, logger])
    if (client === null) return <></>
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}