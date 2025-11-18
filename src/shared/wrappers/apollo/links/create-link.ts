import { ApolloLink } from "@apollo/client"
import { Logger } from "pino"
import { buildTransportLink } from "./transport";
import { buildHttpAuthLink } from "./http-auth";

export function createLink(url: URL, logger: Logger): ApolloLink {
    const transportLink = buildTransportLink(url)
    const links: ApolloLink[] = [
        buildHttpAuthLink(logger),
    ]
    return ApolloLink.from([...links, transportLink])
}

