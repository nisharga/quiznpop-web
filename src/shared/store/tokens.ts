import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

interface TokensStore {
    accessToken: string | null
    refreshToken: string | null
    setAccessToken: (token: string | null) => void
    setTokens: (accessToken: string, refreshToken: string) => void
    reset: () => void
    _hasHydrated: boolean
    _setHasHydrated: (flag: boolean) => void
}

export const tokensStore = create<TokensStore>()(
    persist(
        (set) => ({
            accessToken: null,
            refreshToken: null,
            setAccessToken: accessToken => set({ accessToken }),
            setTokens: (accessToken, refreshToken) =>
                set({ accessToken, refreshToken }),
            reset: () => set({ accessToken: null, refreshToken: null }),
            _hasHydrated: false,
            _setHasHydrated: (flag: boolean) => set({ _hasHydrated: flag })
        }),
        {
            name: 'tokens',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => {
                return (state) => {
                    state?._setHasHydrated(true)
                }
            }
        }
    )
)

