import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

const Store = () => {
  const { bears, increasePopulation } = useBearStore((state) => state)
  return (
    <div onClick={() => increasePopulation()}>
      <span>store</span>
      <div>{bears}</div>
    </div>
  )
}

export default Store
