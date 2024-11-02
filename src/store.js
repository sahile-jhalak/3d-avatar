import { create } from 'zustand'

const useConfiguratorStore = create((set) => ({
    categories: [],
    currentCategory: null,
    assets:[],
    
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))