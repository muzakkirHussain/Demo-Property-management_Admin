import { produce } from 'immer';
import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

const initialState = {
  user: [],
  token: '',
  navState: 0,
};

const useStore = create(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        // setNavState: ({}) =>
        //   set(
        //     produce((state) => {
        //       state.navState = payload;
        //     })
        //   ),
        setUser: (payload) =>
          set(
            produce((state) => {
              state.user = payload;
            })
          ),
        setToken: (payload) =>
          set(
            produce((state) => {
              state.token = payload;
            })
          ),
      }),
      {
        name: 'persist-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export { useStore };
