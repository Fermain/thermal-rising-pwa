import { create } from "zustand";
import { createSelectors } from "./selectors";

import { exampleSlice } from "./slices";
import type { StoreTypes } from "./slices/types";

/**
 * Stored states Entry Point
 * @example
 * import { useStore } from "~/store";
 * // Destructure if you need to access multiple states
 * const { count, increment } = useStore();
 * // Alternatively you can also use dot notation to access a single state
 * let count = useStore().count;
 */
const store = create<StoreTypes>((...args) => ({
  ...exampleSlice(...args),
  // add new store slices here in the same format as above
}));

export default createSelectors(store);
