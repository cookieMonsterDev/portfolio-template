import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

type UseAuthStore = {
  isAuthenticated: boolean;
  updateAuth: (state: boolean) => void;
};

export const useAuthStore = create<UseAuthStore>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        updateAuth: (state: boolean) => set({ isAuthenticated: state }),
      }),
      {
        name: "auth-store",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
