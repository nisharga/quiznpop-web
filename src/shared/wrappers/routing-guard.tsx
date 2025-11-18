'use client';
import {
    AppRouterInstance
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { JSX, ReactNode, useEffect } from 'react'
import { useLogger } from './logger';
import { tokensStore } from '../store/tokens';
import { useStore } from 'zustand';

function guardRoute (
    router: AppRouterInstance,
    accessToken: string | null
): void {
    switch (window.location.pathname) {
    case `/login`:
        if (accessToken !== null) router.push(`/home`)
        break
    default: {
        if (accessToken === null) router.push(`/login`)
    }
    }
}

export function RoutingClientGuard (
    { children }: { children: ReactNode }
): JSX.Element {
    const router = useRouter()
    const accessToken = useStore(tokensStore, s => s.accessToken)
    const isStoreHydrated = useStore(tokensStore, s => s._hasHydrated)
    const logger = useLogger()
    useEffect(() => {
        if (!isStoreHydrated) return
        guardRoute(router, accessToken) 
    }, [router, accessToken, logger, isStoreHydrated])
    return <>{children}</>
}
