import { tokensStore } from "@/shared/store/tokens"
import { ApolloLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { Logger } from "pino"

export function buildHttpAuthLink(logger: Logger): ApolloLink {
    return setContext(async (_, prevContext) => {
        const accessToken = tokensStore.getState().accessToken
        logger.debug(`[AuthLink] accessToken = ${accessToken}`)
        return {
            ...prevContext,
            headers: {
                ...prevContext.headers,
                Authorization: `Bearer ${accessToken}`
            }
        }
    })
}
