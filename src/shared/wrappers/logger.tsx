'use client'
import {
    ReactNode,
    RefObject,
    createContext,
    useContext,
    useEffect,
    useRef
} from "react";
import { Logger, pino } from 'pino'

const LoggerContext = createContext<Logger>(pino())

function createLogger(level: 'debug' | 'info' | 'warn' | 'error'): Logger {
    return pino({
        level,
    })
}


function useNewLogger(
    ...args: Parameters<typeof createLogger>
): RefObject<Logger | null> {
    const ref = useRef<Logger | null>(null)
    useEffect(() => {
        ref.current = createLogger(...args)
        return () => {
            ref.current = null
        }
    }, [args])
    return ref
}

export function useLogger(): Logger {
    return useContext(LoggerContext)
}

interface LoggerWrapperProps {
    args: Parameters<typeof createLogger>
    children: ReactNode
}

export function LoggerWrapper(props: LoggerWrapperProps) {
    const logger = useNewLogger(...props.args)
    if (logger.current === null) return <>{props.children}</>
    return (
        <LoggerContext.Provider value={logger.current}>
            {props.children}
        </LoggerContext.Provider>
    )
}
