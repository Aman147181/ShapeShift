import { create } from "zustand";

const useThemeStore = create((set) => ({
  darkTheme: true,
  toggleDarkTheme: () => {
    set((state) => ({ darkTheme: !state.darkTheme }));
  },
}));

export default useThemeStore;
