import create from "zustand";
import createCounterSlice, { CounterSlice } from "./createCounterSlice";

const useStore = create((set, get) => ({
  ...createCounterSlice(set, get),
}));

export default useStore;
