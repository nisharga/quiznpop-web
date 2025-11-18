import { tokensStore } from "@/shared/store/tokens";
import { ApolloLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { Kind, OperationTypeNode } from "graphql";
import { createClient } from "graphql-ws";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

export function buildTransportLink(url: URL): ApolloLink {
    const httpLink = createUploadLink({
        uri: url.toString(),
        fetch,
    });
    const wsLink = new GraphQLWsLink(createClient({
        url: () => {
            const wsURL = new URL(url)
            if (url.protocol === 'http:') wsURL.protocol = 'ws:'
            if (url.protocol === 'https:') wsURL.protocol = 'wss:'
            const token = tokensStore.getState().accessToken
            if (token !== null) wsURL.searchParams.set('token', token)
            return wsURL.toString()
        }
    }))
    return split(
        ({ query }) => {
            const definition = getMainDefinition(query)
            return (
                definition.kind === Kind.OPERATION_DEFINITION &&
                definition.operation === OperationTypeNode.SUBSCRIPTION
            )
        },
        wsLink,
        httpLink
    )
}
