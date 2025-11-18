import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";
import { createLink } from "./links";
import { Logger } from "pino";

export function createClient(url: URL, logger: Logger) {
    return new ApolloClient({
        ssrMode: window === undefined,
        cache: new InMemoryCache(),
        defaultOptions: {
            query: { fetchPolicy: 'no-cache' },
            mutate: { fetchPolicy: 'no-cache' },
            watchQuery: { fetchPolicy: 'no-cache' }
        },
        link: createLink(url, logger)
    });
}

