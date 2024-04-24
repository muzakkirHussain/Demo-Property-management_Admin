import { produce } from "immer";
import { create } from "zustand";
import {
  persist,
  devtools,
  createJSONStorage,
  redux,
} from "zustand/middleware";

const initialState = {
  user: "",
  count: 20,
  navState: "0",
};

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        // increment: () => set((state) => ({ count: state.count + 1 })),
        navState: () =>
          set(
            produce((state) => {
              state.count = payload;
            })
          ),
        increment: () =>
          set(
            produce((state) => {
              state.count = state.count + 1;
            })
          ),
        setNumber: (payload) =>
          set(
            produce((state) => {
              state.count = payload;
            })
          ),
        decrement: () =>
          set(
            produce((state) => {
              state.count = state.count - 1;
            })
          ),
        increaseBy: (num) =>
          set(
            produce((state) => {
              state.count = state.count + num;
            })
          ),
        // getCount: () => get().count,
      }),
      {
        name: "persist-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useStore;
