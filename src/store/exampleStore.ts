import { create } from "zustand";
import { createSelectors } from "./selectors";

interface State {
  count: number;
}

interface Actions {
  increase: (amount: number) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const initialState: State = {
  count: 0,
};

const useExampleStore = create<State & Actions>((set) => ({
  ...initialState,
  increase: (amount) => set((state) => ({ count: state.count + amount })),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(initialState),
}));

export default createSelectors(useExampleStore);
