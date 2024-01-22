import { create } from 'zustand'

type Store = {
    refresh: boolean
    setRefresh: () => void
}

export const useStore = create<Store>()((set) => ({
    refresh: false,
    setRefresh: () => set((state) => ({ refresh: !state.refresh })),
}))
