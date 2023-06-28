import { StateCreator } from "zustand";

interface ExampleState {
  count: number;
}

interface ExampleActions {
  increase: (amount: number) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const initialState: ExampleState = {
  count: 0,
};

// Export interface and extend to StoreTypes in ./types.ts
export interface ExampleTypes extends ExampleState, ExampleActions {}

/**
 * Example store slice, used for reference when creating new store slices
 * @example const { count, increase, increment, decrement, reset } = useStore();
 */
const exampleSlice: StateCreator<ExampleTypes> = (set) => ({
  ...initialState,
  increase: (amount) => set((state) => ({ count: state.count + amount })),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(initialState),
});

export default exampleSlice;
